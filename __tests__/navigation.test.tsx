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
    goToEditTag,
    goToPurchaseStats,
} from '../app/navigation/navigation';

let layoutRoot: LayoutRoot;
let layout: Layout;
jest.mock('react-native-navigation', () => ({
    Navigation: {
        registerComponent: () => undefined,
        setRoot: (args: LayoutRoot) =>
            new Promise<void>(resolve => {
                layoutRoot = args;
                resolve();
            }),
        push: (id: string, args: Layout) =>
            new Promise<void>(resolve => {
                layout = args;
                resolve();
            }),
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

async function testStackReset(navigate: () => Promise<any>, expected: string) {
    await navigate();

    // @ts-ignore
    expect(layoutRoot.root.stack.children[0].component.name).toEqual(expected);
}

async function testStackPush(navigate: () => Promise<any>, expected: string) {
    await navigate();

    // @ts-ignore
    expect(layout.component.name).toEqual(expected);
}

describe('Navigation', () => {
    it('goToLoading correctly navigates to loading screen', async () => {
        await testStackReset(goToLoading, 'Loading');
    });

    it('goToHome correctly navigates to home screen', async () => {
        await testStackReset(goToHome, 'Home');
    });

    it('goToHabbajet correctly navigates to habbajet screen', async () => {
        await testStackPush(goToHabbajet, 'Habbajet');
    });

    it('goToNewHabbajet correctly navigates to the new habbajet screen', async () => {
        await testStackPush(goToNewHabbajet, 'NewHabbajet');
    });

    it('goToPurchases correctly navigates to the purchases screen', async () => {
        await testStackPush(goToPurchases, 'Purchases');
    });

    it('goToNewPurchase correctly navigates to the new purchase screen', async () => {
        await testStackPush(goToNewPurchase, 'NewPurchase');
    });

    it('goToEditHabbajet correctly navigates to the edit habbajet screen', async () => {
        await testStackPush(goToEditHabbajet, 'EditHabbajet');
    });

    it('goToStartingBudget correctly navigates to the starting budget screen', async () => {
        await testStackReset(goToStartingBudget, 'StartingBudget');
    });

    it('goToNewTag correctly navigates to the new tag screen', async () => {
        await testStackPush(goToNewTag, 'NewTag');
    });

    it('goToEditPurchase correctly navigates to the edit purchase screen', async () => {
        await testStackPush(goToEditPurchase, 'EditPurchase');
    });

    it('goToEditTag correctly navigates to the edit tag screen', async () => {
        await testStackPush(goToEditTag, 'EditTag');
    });

    it('goToPurchaseStats correctly navigates to the purchase stats screen', async () => {
        await testStackPush(goToPurchaseStats, 'PurchaseStats');
    });
});
