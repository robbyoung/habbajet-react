import {Navigation} from 'react-native-navigation';
import {grey, white} from '../colors';
import SplashScreen from 'react-native-splash-screen';
import {Screens} from './screens';

export const STACK_NAVIGATOR = 'StackNavigator';

let currentNavigationActivity: Promise<any> | undefined;

function safeNavigation(activity: () => Promise<any>) {
    if (!currentNavigationActivity) {
        currentNavigationActivity = activity().then(
            () => (currentNavigationActivity = undefined),
        );
    }
    return currentNavigationActivity;
}

export const goBack = () => Navigation.pop(STACK_NAVIGATOR);

export const goToLoading = () =>
    safeNavigation(() =>
        Navigation.setRoot({
            root: {
                stack: {
                    id: STACK_NAVIGATOR,
                    children: [
                        {
                            component: {
                                name: Screens.Loading,
                                options: {
                                    topBar: {
                                        visible: false,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        }),
    );

export const goToHome = () =>
    safeNavigation(() =>
        Navigation.setRoot({
            root: {
                stack: {
                    id: STACK_NAVIGATOR,
                    children: [
                        {
                            component: {
                                name: Screens.Home,
                                options: {
                                    topBar: {
                                        title: {
                                            text: 'Habbajet',
                                            fontFamily: 'Abel',
                                            fontSize: 30,
                                            color: white,
                                        },
                                        background: {
                                            color: grey,
                                        },
                                        rightButtons: [],
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        }).then(() => SplashScreen.hide()),
    );

export const goToHabbajet = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.Habbajet,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        rightButtons: [
                            {
                                id: 'addPurchaseButton',
                                component: {
                                    name: 'topBar.editHabbajetButton',
                                },
                            },
                        ],
                    },
                },
            },
        }),
    );

export const goToNewHabbajet = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.NewHabbajet,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'New Habbajet',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                        rightButtons: [],
                    },
                },
            },
        }),
    );

export const goToPurchases = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.Purchases,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'Purchases',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                        rightButtons: [
                            {
                                id: 'addPurchaseButton',
                                component: {
                                    name: 'topBar.addPurchaseButton',
                                },
                            },
                        ],
                    },
                },
            },
        }),
    );

export const goToNewPurchase = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.NewPurchase,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'New Purchase',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                    },
                },
            },
        }),
    );

export const goToEditHabbajet = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.EditHabbajet,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'Edit Habbajet',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                    },
                },
            },
        }),
    );

export const goToStartingBudget = () =>
    safeNavigation(() =>
        Navigation.setRoot({
            root: {
                stack: {
                    id: STACK_NAVIGATOR,
                    children: [
                        {
                            component: {
                                name: Screens.StartingBudget,
                                options: {
                                    topBar: {
                                        backButton: {
                                            color: white,
                                        },
                                        title: {
                                            text: 'Getting Started',
                                            fontFamily: 'Abel',
                                            fontSize: 30,
                                            color: white,
                                        },
                                        background: {
                                            color: grey,
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        }).then(() => SplashScreen.hide()),
    );

export const goToNewTag = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.NewTag,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'New Tag',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                    },
                },
            },
        }),
    );

export const goToEditPurchase = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.EditPurchase,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'Edit Purchase',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                    },
                },
            },
        }),
    );

export const goToEditTag = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.EditTag,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'Edit Tag',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                    },
                },
            },
        }),
    );

export const goToPurchaseStats = () =>
    safeNavigation(() =>
        Navigation.push(STACK_NAVIGATOR, {
            component: {
                name: Screens.PurchaseStats,
                options: {
                    topBar: {
                        backButton: {
                            color: white,
                        },
                        title: {
                            text: 'Purchase Stats',
                            fontFamily: 'Abel',
                            fontSize: 30,
                            color: white,
                        },
                        background: {
                            color: grey,
                        },
                    },
                },
            },
        }),
    );
