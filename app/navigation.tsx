import {Navigation} from 'react-native-navigation';
import React from 'react';
import HabbajetScreen from './containers/habbajetScreen';
import LoadingScreen from './containers/loadingScreen';
import {Provider} from 'react-redux';
import store from './store';

export const STACK_NAVIGATOR = 'StackNavigator';

Navigation.registerComponent('LoadingScreen', () => LoadingScreen);
Navigation.registerComponent(
    'HabbajetScreen',
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
                            name: 'LoadingScreen',
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
                            name: 'HabbajetScreen',
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
