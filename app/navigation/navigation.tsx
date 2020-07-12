import {Navigation} from 'react-native-navigation';
import {grey, white} from '../colors';
import SplashScreen from 'react-native-splash-screen';
import {Screens} from './screens';

export const STACK_NAVIGATOR = 'StackNavigator';

export const goBack = () => Navigation.pop(STACK_NAVIGATOR);

export const goToLoading = () => {
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
    });
};

export const goToHome = () => {
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
    });
    SplashScreen.hide();
};

export const goToHabbajet = () => {
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
    });
};

export const goToNewHabbajet = () => {
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
    });
};

export const goToPurchases = () => {
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
    });
};

export const goToNewPurchase = () => {
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
    });
};

export const goToEditHabbajet = () => {
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
    });
};

export const goToStartingBudget = () => {
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
    });
    SplashScreen.hide();
};

export const goToNewTag = () => {
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
    });
};

export const goToEditPurchase = () => {
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
    });
};

export const goToEditTag = () => {
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
    });
};
