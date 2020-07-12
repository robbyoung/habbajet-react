import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import NewTagScreen from '../../app/containers/newTagScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({
    saveState: () => undefined,
}));

describe('Edit Tag Screen Component', () => {
    it('will map state to a tag editing form', () => {
        const component = renderer.create(
            <Provider store={store}>
                <NewTagScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
