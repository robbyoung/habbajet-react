import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Purchase} from '../state';

export interface AddPurchaseAction extends Action {
    type: ActionType.ADD_PURCHASE;
    newPurchase: Purchase;
}

export function addPurchaseAction(
    name: string,
    cost: number,
    tagId: string,
): AddPurchaseAction {
    return {
        type: ActionType.ADD_PURCHASE,
        newPurchase: {
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
    return [action.newPurchase, ...state];
}
