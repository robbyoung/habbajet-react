import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import EditHabbajetScreen from '../../app/containers/editHabbajetScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({
    saveState: () => undefined,
}));

describe('Edit Habbajet Screen Component', () => {
    it('will map state to a habbajet edit form', () => {
        const component = renderer.create(
            <Provider store={store}>
                <EditHabbajetScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
