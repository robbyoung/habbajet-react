import React from 'react';
import renderer from 'react-test-renderer';
import HabbajetScreen from '../../app/containers/habbajetScreen';
import store from '../../app/store';
import { addHabbajetAction } from '../../app/actions';
import { Provider } from 'react-redux';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('Habbajet Screen Component', () => {
    it('will map state to a habbajet display', () => {
        store.dispatch(addHabbajetAction('Test Habbajet', 100, '#8066C2'));

        const component = renderer.create(
            <Provider store={store}>
                <HabbajetScreen/>
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
