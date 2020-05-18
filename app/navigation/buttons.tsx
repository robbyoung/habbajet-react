import React from 'react';
import IconButton from '../components/iconButton';
import {white} from '../colors';
import {faPlus, faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import store from '../store';
import {clearPurchaseEditorAction} from '../actions';
import {goToNewPurchase, goToEditHabbajet} from './navigation';

export const PlusButton = () => (
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

export const PencilButton = () => (
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

export const TrashButton = (props: {onPress: () => void}) => (
    <IconButton
        size={25}
        color={white}
        icon={faTrash}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{paddingRight: 15}}
        onPress={() => props.onPress()}
    />
);
