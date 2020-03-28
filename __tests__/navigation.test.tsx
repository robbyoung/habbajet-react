import {LayoutRoot} from 'react-native-navigation';
import {goToLoading, goToHabbajet, goToHome} from '../app/navigation';

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

function testStackNavigation(navigate: () => void, expected: string) {
    navigate();

    // @ts-ignore
    expect(layout.root.stack.children[0].component.name).toEqual(expected);
}

describe('Navigation', () => {
    it('goToLoading correctly navigates to loading screen', () => {
        testStackNavigation(goToLoading, 'Loading');
    });

    it('goToHome correctly navigates to home screen', () => {
        testStackNavigation(goToHome, 'Home');
    });

    it('goToHabbajet correctly navigates to habbajet screen', () => {
        testStackNavigation(goToHabbajet, 'Habbajet');
    });
});
