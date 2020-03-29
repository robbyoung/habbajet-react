import React from 'react';
import renderer, {act} from 'react-test-renderer';
import HabbajetScreen from '../../app/containers/habbajetScreen';
import store from '../../app/store';
import {loadStateAction} from '../../app/actions';
import {Provider} from 'react-redux';
import {createTestState} from '../../app/state/testState';

jest.mock('react-native-navigation', () => ({
    Navigation: {
        registerComponent: () => undefined,
        mergeOptions: () => undefined,
    },
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({
    saveState: () => undefined,
}));

describe('Habbajet Screen Component', () => {
    it('will map state to a habbajet display', () => {
        const state = createTestState(3, 0, 0, 1);
        store.dispatch(loadStateAction(state));

        const component = renderer.create(
            <Provider store={store}>
                <HabbajetScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will return an empty view if no habbajets are selected', () => {
        act(() => {
            const state = createTestState(3, 0, 0);
            store.dispatch(loadStateAction(state));
        });

        const component = renderer.create(
            <Provider store={store}>
                <HabbajetScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
