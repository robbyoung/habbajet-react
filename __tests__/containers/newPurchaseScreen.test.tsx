import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import NewPurchaseScreen from '../../app/containers/newPurchaseScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({
    saveState: () => undefined,
}));

describe('New Purchase Screen Component', () => {
    it('will map state to a purchase creation form', () => {
        const component = renderer.create(
            <Provider store={store}>
                <NewPurchaseScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
