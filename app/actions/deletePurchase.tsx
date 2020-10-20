import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Purchase} from '../state';

export interface DeletePurchaseAction extends Action {
    type: ActionType.DELETE_PURCHASE;
    purchaseId: string;
}

export function deletePurchaseAction(purchaseId: string): DeletePurchaseAction {
    return {
        type: ActionType.DELETE_PURCHASE,
        purchaseId,
    };
}

export function deletePurchase(
    state: Purchase[],
    action: DeletePurchaseAction,
): Purchase[] {
    return state.filter(purchase => purchase.id !== action.purchaseId);
}
