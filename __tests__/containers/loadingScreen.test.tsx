import React from 'react';
import renderer from 'react-test-renderer';
import {LayoutRoot} from 'react-native-navigation';
import LoadingScreen from '../../app/containers/loadingScreen';
import {Provider} from 'react-redux';
import store from '../../app/store';

let layout: LayoutRoot;
jest.mock('react-native-navigation', () => ({
    Navigation: {
        registerComponent: () => undefined,
        setRoot: (args: LayoutRoot) => (layout = args),
    },
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

let mockStatePopulated = false;
let stateLoaded: Boolean = false;
jest.mock('../../app/storage', () => ({
    loadState: () => {
        stateLoaded = true;
        return mockStatePopulated
            ? {
                  purchases: [],
                  habbajets: [],
                  budget: 0,
                  tags: [],
              }
            : undefined;
    },
}));

describe('Loading Screen Component', () => {
    it('will redirect to starting budget screen for empty stores', async () => {
        mockStatePopulated = false;
        stateLoaded = false;
        const component = renderer.create(
            <Provider store={store}>
                <LoadingScreen />
            </Provider>,
        );
        await waitForLoad();

        // @ts-ignore
        expect(layout.root.stack.children[0].component.name).toEqual(
            'StartingBudget',
        );
        expect(stateLoaded).toEqual(true);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will redirect to home screen if store is populated', async () => {
        mockStatePopulated = true;
        stateLoaded = false;

        const component = renderer.create(
            <Provider store={store}>
                <LoadingScreen />
            </Provider>,
        );
        await waitForLoad();

        // @ts-ignore
        expect(layout.root.stack.children[0].component.name).toEqual('Home');
        expect(stateLoaded).toEqual(true);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

async function waitForLoad() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 0);
    });
}
