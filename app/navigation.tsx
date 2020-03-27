import {Navigation} from 'react-native-navigation';
import React from 'react';
import HabbajetScreen from './containers/habbajetScreen';
import LoadingScreen from './containers/loadingScreen';
import {Provider} from 'react-redux';
import store from './store';

enum Screens {
    Loading = 'Loading',
    Habbajet = 'Habbajet',
}

export const STACK_NAVIGATOR = 'StackNavigator';

Navigation.registerComponent(Screens.Loading, () => LoadingScreen);
Navigation.registerComponent(
    Screens.Habbajet,
    () => props => (
        <Provider store={store}>
            <HabbajetScreen {...props} />
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
