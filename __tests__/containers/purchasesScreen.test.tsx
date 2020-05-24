import React from 'react';
import renderer, {act} from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import PurchasesScreen from '../../app/containers/purchasesScreen';
import {createTestState} from '../../app/state/testState';
import {loadStateAction} from '../../app/actions';
import {render, fireEvent, wait} from '@testing-library/react-native';

const mockGoToEditPurchase = jest.fn();
jest.mock('../../app/navigation/navigation', () => ({
    goToEditPurchase: () => mockGoToEditPurchase(),
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({}));

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

    it('display a message if there are no purchases', () => {
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

    it('touching a purchase will direct you to the edit purchase screen', async () => {
        act(() => {
            const state = createTestState(0, 10, 0);
            store.dispatch(loadStateAction(state));
        });

        const {getByTestId} = render(
            <Provider store={store}>
                <PurchasesScreen />
            </Provider>,
        );

        const row = getByTestId('purchase-0');
        fireEvent.press(row);
        await wait(() => expect(mockGoToEditPurchase).toBeCalled());
    });
});
