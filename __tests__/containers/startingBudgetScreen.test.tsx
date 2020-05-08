import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import {Provider} from 'react-redux';
import StartingBudgetScreen from '../../app/containers/startingBudgetScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('../../app/storage', () => ({
    saveState: () => undefined,
    loadState: () => undefined,
}));

describe('Starting Budget Screen Component', () => {
    it('can render a starting budget form', () => {
        const component = renderer.create(
            <Provider store={store}>
                <StartingBudgetScreen />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
