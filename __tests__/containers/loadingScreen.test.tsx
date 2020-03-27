import React from 'react';
import renderer from 'react-test-renderer';
import {LayoutRoot} from 'react-native-navigation';
import LoadingScreen from '../../app/containers/loadingScreen';

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

describe('Loading Screen Component', () => {
    it('will redirect to habbajet screen', async () => {
        const component = renderer.create(<LoadingScreen />);
        await waitForLoad();

        // @ts-ignore
        expect(layout.root.stack.children[0].component.name).toEqual(
            'Habbajet',
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});

async function waitForLoad() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 0);
    });
}
