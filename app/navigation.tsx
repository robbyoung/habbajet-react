import {Navigation} from 'react-native-navigation';
import React from 'react';
import HabbajetScreen from './containers/habbajetScreen';
import LoadingScreen from './containers/loadingScreen';
import {Provider} from 'react-redux';
import store from './store';
import HomeScreen from './containers/homeScreen';
import {grey, white} from './colors';
import NewHabbajetScreen from './containers/newHabbajetScreen';

enum Screens {
    Loading = 'Loading',
    Home = 'Home',
    Habbajet = 'Habbajet',
    NewHabbajet = 'NewHabbajet',
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
                },
            },
        },
    });
};
