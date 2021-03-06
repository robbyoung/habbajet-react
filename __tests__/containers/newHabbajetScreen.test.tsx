import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import NewHabbajetScreen from '../../app/containers/newHabbajetScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({
    saveState: () => undefined,
}));

describe('New Habbajet Screen Component', () => {
    it('will map state to a habbajet creation form', () => {
        const component = renderer.create(
            <Provider store={store}>
                <NewHabbajetScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
