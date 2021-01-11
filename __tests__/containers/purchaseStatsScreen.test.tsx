import React from 'react';
import renderer, {act} from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import {createTestState} from '../../app/state/testState';
import {loadStateAction} from '../../app/actions';
import PurchaseStatsScreen from '../../app/containers/purchaseStatsScreen';
import moment from 'moment';

jest.mock('../../app/storage', () => ({}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('Purchase Stats Screen Component', () => {
    beforeAll(() => {
        moment.now = jest.fn(() => 1560384673000);
    });

    it('will display purchase stats based on the state', () => {
        const state = createTestState(5, 10, 200);
        store.dispatch(loadStateAction(state));

        const component = renderer.create(
            <Provider store={store}>
                <PurchaseStatsScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('displays a message if there are no stats', () => {
        act(() => {
            const state = createTestState(5, 0, 200);
            store.dispatch(loadStateAction(state));
        });

        const component = renderer.create(
            <Provider store={store}>
                <PurchaseStatsScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
