import React from 'react';
import renderer from 'react-test-renderer';
import HabbajetScreen from '../../app/containers/habbajetScreen';
import store from '../../app/store';
import {addHabbajetAction} from '../../app/actions';
import {Provider} from 'react-redux';

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
        store.dispatch(addHabbajetAction('Test Habbajet', 100, 2, '#8066C2'));

        const component = renderer.create(
            <Provider store={store}>
                <HabbajetScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
