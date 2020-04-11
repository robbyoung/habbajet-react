import React from 'react';
import renderer, {act} from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import PurchasesScreen from '../../app/containers/purchasesScreen';
import {createTestState} from '../../app/state/testState';
import {loadStateAction} from '../../app/actions';

describe('New Purchases Screen Component', () => {
    it('will map state to a list of purchases', () => {
        const state = createTestState(5, 10, 200);
        store.dispatch(loadStateAction(state));

        const component = renderer.create(
            <Provider store={store}>
                <PurchasesScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can be empty if there are no purchases', () => {
        act(() => {
            const state = createTestState(5, 0, 200);
            store.dispatch(loadStateAction(state));
        });

        const component = renderer.create(
            <Provider store={store}>
                <PurchasesScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
