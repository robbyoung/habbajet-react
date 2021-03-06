import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import EditPurchaseScreen from '../../app/containers/editPurchaseScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({
    saveState: () => undefined,
}));

describe('Edit Purchase Screen Component', () => {
    it('will map state to a purchase edit form', () => {
        const component = renderer.create(
            <Provider store={store}>
                <EditPurchaseScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
