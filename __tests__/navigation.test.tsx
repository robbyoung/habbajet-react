import {LayoutRoot, Layout} from 'react-native-navigation';
import {
    goToLoading,
    goToHabbajet,
    goToHome,
    goToNewHabbajet,
    goToPurchases,
    goToNewPurchase,
    goToEditHabbajet,
    goToStartingBudget,
    goToNewTag,
    goToEditPurchase,
} from '../app/navigation';

let layoutRoot: LayoutRoot;
let layout: Layout;
jest.mock('react-native-navigation', () => ({
    Navigation: {
        registerComponent: () => undefined,
        setRoot: (args: LayoutRoot) => (layoutRoot = args),
        push: (id: string, args: Layout) => (layout = args),
    },
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

jest.mock('react-native-splash-screen', () => ({
    hide: () => undefined,
}));

jest.mock('../app/storage', () => ({
    saveState: () => undefined,
    loadState: () => undefined,
}));

function testStackReset(navigate: () => void, expected: string) {
    navigate();

    // @ts-ignore
    expect(layoutRoot.root.stack.children[0].component.name).toEqual(expected);
}

function testStackPush(navigate: () => void, expected: string) {
    navigate();

    // @ts-ignore
    expect(layout.component.name).toEqual(expected);
}

describe('Navigation', () => {
    it('goToLoading correctly navigates to loading screen', () => {
        testStackReset(goToLoading, 'Loading');
    });

    it('goToHome correctly navigates to home screen', () => {
        testStackReset(goToHome, 'Home');
    });

    it('goToHabbajet correctly navigates to habbajet screen', () => {
        testStackPush(goToHabbajet, 'Habbajet');
    });

    it('goToNewHabbajet correctly navigates to the new habbajet screen', () => {
        testStackPush(goToNewHabbajet, 'NewHabbajet');
    });

    it('goToPurchases correctly navigates to the purchases screen', () => {
        testStackPush(goToPurchases, 'Purchases');
    });

    it('goToNewPurchase correctly navigates to the new purchase screen', () => {
        testStackPush(goToNewPurchase, 'NewPurchase');
    });

    it('goToEditHabbajet correctly navigates to the edit habbajet screen', () => {
        testStackPush(goToEditHabbajet, 'EditHabbajet');
    });

    it('goToStartingBudget correctly navigates to the starting budget screen', () => {
        testStackReset(goToStartingBudget, 'StartingBudget');
    });

    it('goToNewTag correctly navigates to the new tag screen', () => {
        testStackPush(goToNewTag, 'NewTag');
    });

    it('goToEditPurchase correctly navigates to the edit purchase screen', () => {
        testStackPush(goToEditPurchase, 'EditPurchase');
    });
});
