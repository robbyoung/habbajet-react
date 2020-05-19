import React from 'react';
import {faPlus, faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import store from '../store';
import {clearPurchaseEditorAction} from '../actions';
import {goToNewPurchase, goToEditHabbajet} from './navigation';
import NavigationButton from '../components/navigationButton';

export const PlusButton = () => (
    <NavigationButton
        icon={faPlus}
        testID="button-plus"
        onPress={() => {
            store.dispatch(clearPurchaseEditorAction());
            goToNewPurchase();
        }}
    />
);

export const PencilButton = () => (
    <NavigationButton
        icon={faPencilAlt}
        testID="button-pencil"
        onPress={() => {
            goToEditHabbajet();
        }}
    />
);

export const TrashButton = (props: {onPress: () => void}) => (
    <NavigationButton
        icon={faTrash}
        testID="button-trash"
        onPress={() => props.onPress()}
    />
);
