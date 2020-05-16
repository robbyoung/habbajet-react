import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Purchase} from '../state';
import uuid from 'react-native-uuid';

export interface AddPurchaseAction extends Action {
    type: ActionType.ADD_PURCHASE;
    newPurchase: Purchase;
}

export function addPurchaseAction(
    name: string,
    cost: number,
    tagId: string,
    id = uuid.v4(),
): AddPurchaseAction {
    return {
        type: ActionType.ADD_PURCHASE,
        newPurchase: {
            id,
            name,
            cost,
            tagId,
            date: moment().toISOString(),
        },
    };
}

export function addPurchase(
    state: Purchase[],
    action: AddPurchaseAction,
): Purchase[] {
    const replaceIndex = state.findIndex(
        purchase => action.newPurchase.id === purchase.id,
    );
    if (replaceIndex !== -1) {
        const newState = [...state];
        newState[replaceIndex] = {
            ...newState[replaceIndex],
            name: action.newPurchase.name,
            cost: action.newPurchase.cost,
            tagId: action.newPurchase.tagId,
        };
        return newState;
    }

    return [action.newPurchase, ...state];
}
