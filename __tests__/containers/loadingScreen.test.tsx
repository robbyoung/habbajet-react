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

let stateLoaded = false;
jest.mock('../../app/storage', () => ({
    loadState: () => {
        stateLoaded = true;
        return {
            purchases: [],
            habbajets: [],
            budget: 0,
            tags: [],
        };
    },
}));

describe('Loading Screen Component', () => {
    it('will redirect to home screen', async () => {
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
