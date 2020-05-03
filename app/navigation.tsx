import {Navigation} from 'react-native-navigation';
import React from 'react';
import HabbajetScreen from './containers/habbajetScreen';
import LoadingScreen from './containers/loadingScreen';
import {Provider} from 'react-redux';
import store from './store';
import HomeScreen from './containers/homeScreen';
import {grey, white} from './colors';
import NewHabbajetScreen from './containers/newHabbajetScreen';
import PurchasesScreen from './containers/purchasesScreen';
import IconButton from './components/iconButton';
import {faPlus, faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import NewPurchaseScreen from './containers/newPurchaseScreen';
import {clearPurchaseEditorAction, deleteHabbajetAction} from './actions';
import SplashScreen from 'react-native-splash-screen';
import EditHabbajetScreen from './containers/editHabbajetScreen';
import {saveState} from './storage';

enum Screens {
    Loading = 'Loading',
    Home = 'Home',
    Habbajet = 'Habbajet',
    NewHabbajet = 'NewHabbajet',
    Purchases = 'Purchases',
    NewPurchase = 'NewPurchase',
    EditHabbajet = 'EditHabbajet',
}

export const STACK_NAVIGATOR = 'StackNavigator';

Navigation.registerComponent(
    Screens.Loading,
    () => () => (
        <Provider store={store}>
            <LoadingScreen />
        </Provider>
    ),
    () => LoadingScreen,
);

Navigation.registerComponent(
    Screens.Home,
    () => () => (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    ),
    () => HabbajetScreen,
);

Navigation.registerComponent(
    Screens.Habbajet,
    () => () => (
        <Provider store={store}>
            <HabbajetScreen />
        </Provider>
    ),
    () => HabbajetScreen,
);

Navigation.registerComponent(
    Screens.NewHabbajet,
    () => () => (
        <Provider store={store}>
            <NewHabbajetScreen />
        </Provider>
    ),
    () => NewHabbajetScreen,
);

Navigation.registerComponent(
    Screens.Purchases,
    () => () => (
        <Provider store={store}>
            <PurchasesScreen />
        </Provider>
    ),
    () => PurchasesScreen,
);

Navigation.registerComponent(
    Screens.NewPurchase,
    () => () => (
        <Provider store={store}>
            <NewPurchaseScreen />
        </Provider>
    ),
    () => NewPurchaseScreen,
);

Navigation.registerComponent(
    Screens.EditHabbajet,
    () => () => (
        <Provider store={store}>
            <EditHabbajetScreen />
        </Provider>
    ),
    () => EditHabbajetScreen,
);

const PlusButton = () => (
    <IconButton
        size={25}
        color={white}
        icon={faPlus}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{paddingRight: 15}}
        onPress={() => {
            store.dispatch(clearPurchaseEditorAction());
            goToNewPurchase();
        }}
    />
);
Navigation.registerComponent('topBar.addPurchaseButton', () => PlusButton);

const PencilButton = () => (
    <IconButton
        size={25}
        color={white}
        icon={faPencilAlt}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{paddingRight: 15}}
        onPress={() => {
            goToEditHabbajet();
        }}
    />
);
Navigation.registerComponent('topBar.editHabbajetButton', () => PencilButton);

const TrashButton = () => (
    <IconButton
        size={25}
        color={white}
        icon={faTrash}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{paddingRight: 15}}
        onPress={() => {
            goToHome();
            store.dispatch(deleteHabbajetAction());
            saveState();
        }}
    />
);
Navigation.registerComponent('topBar.deleteHabbajetButton', () => TrashButton);

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
                    rightButtons: [
                        {
                            id: 'deleteHabbajetButton',
                            component: {
                                name: 'topBar.deleteHabbajetButton',
                            },
                        },
                    ],
                },
            },
        },
    });
};
