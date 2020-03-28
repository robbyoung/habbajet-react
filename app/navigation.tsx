import {Navigation} from 'react-native-navigation';
import React from 'react';
import HabbajetScreen from './containers/habbajetScreen';
import LoadingScreen from './containers/loadingScreen';
import {Provider} from 'react-redux';
import store from './store';
import HomeScreen from './containers/homeScreen';

enum Screens {
    Loading = 'Loading',
    Home = 'Home',
    Habbajet = 'Habbajet',
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
                                        color: '#ffffff',
                                    },
                                    background: {
                                        color: '#959595',
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
    Navigation.setRoot({
        root: {
            stack: {
                id: STACK_NAVIGATOR,
                children: [
                    {
                        component: {
                            name: Screens.Habbajet,
                            options: {
                                topBar: {
                                    title: {
                                        text: ' ',
                                        fontFamily: 'Abel',
                                        fontSize: 30,
                                        color: '#ffffff',
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
