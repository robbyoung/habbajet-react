import {LayoutRoot} from 'react-native-navigation';
import {goToLoading, goToHabbajet} from '../app/navigation';

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

jest.mock('../app/storage', () => ({
    saveState: () => undefined,
    loadState: () => undefined,
}));

describe('Navigation', () => {
    it('goToLoading correctly navigates to loading screen', () => {
        goToLoading();

        // @ts-ignore
        expect(layout.root.stack.children[0].component.name).toEqual('Loading');
    });

    it('goToHabbajet correctly navigates to habbajet screen', () => {
        goToHabbajet();

        // @ts-ignore
        expect(layout.root.stack.children[0].component.name).toEqual(
            'Habbajet',
        );
    });
});
