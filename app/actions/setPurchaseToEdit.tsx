import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Purchase, PurchaseEditor} from '../state';

export interface SetPurchaseToEditAction extends Action {
    type: ActionType.SET_PURCHASE_TO_EDIT;
    purchase: Purchase;
}

export function setPurchaseToEditAction(
    purchase: Purchase,
): SetPurchaseToEditAction {
    return {
        type: ActionType.SET_PURCHASE_TO_EDIT,
        purchase,
    };
}

export function setPurchaseToEdit(
    _state: PurchaseEditor,
    action: SetPurchaseToEditAction,
): PurchaseEditor {
    return {
        name: {
            value: action.purchase.name,
            errorMessage: '',
        },
        cost: {
            value: `${action.purchase.cost}`,
            errorMessage: '',
        },
        tagId: action.purchase.tagId,
        validated: false,
    };
}
