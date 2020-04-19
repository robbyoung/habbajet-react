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
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import NewPurchaseScreen from './containers/newPurchase';

enum Screens {
    Loading = 'Loading',
    Home = 'Home',
    Habbajet = 'Habbajet',
    NewHabbajet = 'NewHabbajet',
    Purchases = 'Purchases',
    NewPurchase = 'NewPurchase',
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

const PlusButton = (props: {preNavigation: () => void}) => (
    <IconButton
        size={25}
        color={white}
        icon={faPlus}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{paddingRight: 15}}
        onPress={() => {
            props.preNavigation();
            goToNewPurchase();
        }}
    />
);
Navigation.registerComponent('topBar.addPurchaseButton', () => PlusButton);

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
                    title: {
                        text: ' ',
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
                                passProps: {
                                    preNavigation: () => undefined,
                                },
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
