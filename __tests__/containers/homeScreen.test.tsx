import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import {loadStateAction} from '../../app/actions';
import {Provider} from 'react-redux';
import HomeScreen from '../../app/containers/homeScreen';
import {createTestState} from '../../app/state/testState';

describe('Home Screen Component', () => {
    it('will map state to a budget display and habbajet list', () => {
        const state = createTestState(5, 10, 200);
        store.dispatch(loadStateAction(state));

        const component = renderer.create(
            <Provider store={store}>
                <HomeScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
