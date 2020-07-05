import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Screens} from './screens';
import {Provider} from 'react-redux';
import store from '../store';
import LoadingScreen from '../containers/loadingScreen';
import HomeScreen from '../containers/homeScreen';
import HabbajetScreen from '../containers/habbajetScreen';
import NewHabbajetScreen from '../containers/newHabbajetScreen';
import PurchasesScreen from '../containers/purchasesScreen';
import NewPurchaseScreen from '../containers/newPurchaseScreen';
import EditHabbajetScreen from '../containers/editHabbajetScreen';
import StartingBudgetScreen from '../containers/startingBudgetScreen';
import NewTagScreen from '../containers/newTagScreen';
import EditPurchaseScreen from '../containers/editPurchaseScreen';
import {PlusButton, PencilButton, TrashButton} from './buttons';
import ConfirmationModal from '../components/confirmationModal';
import HelpModal from '../components/helpModal';
import EditTagScreen from '../containers/editTagScreen';

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

Navigation.registerComponent(
    Screens.StartingBudget,
    () => () => (
        <Provider store={store}>
            <StartingBudgetScreen />
        </Provider>
    ),
    () => StartingBudgetScreen,
);

Navigation.registerComponent(
    Screens.NewTag,
    () => () => (
        <Provider store={store}>
            <NewTagScreen />
        </Provider>
    ),
    () => NewTagScreen,
);

Navigation.registerComponent(
    Screens.EditPurchase,
    () => () => (
        <Provider store={store}>
            <EditPurchaseScreen />
        </Provider>
    ),
    () => EditPurchaseScreen,
);

Navigation.registerComponent(
    Screens.EditTag,
    () => () => (
        <Provider store={store}>
            <EditTagScreen />
        </Provider>
    ),
    () => EditTagScreen,
);

Navigation.registerComponent('topBar.addPurchaseButton', () => PlusButton);

Navigation.registerComponent('topBar.editHabbajetButton', () => PencilButton);

Navigation.registerComponent('topBar.deleteHabbajetButton', () => TrashButton);

Navigation.registerComponent('modal.confirmation', () => ConfirmationModal);

Navigation.registerComponent('modal.help', () => HelpModal);
