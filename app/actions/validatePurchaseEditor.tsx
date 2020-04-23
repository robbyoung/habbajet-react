import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {PurchaseEditor} from '../state';

export interface ValidatePurchaseEditorAction extends Action {
    type: ActionType.VALIDATE_PURCHASE_EDITOR;
}

export function validatePurchaseEditorAction(): ValidatePurchaseEditorAction {
    return {
        type: ActionType.VALIDATE_PURCHASE_EDITOR,
    };
}

export function validatePurchaseEditor(
    state: PurchaseEditor,
    _action: ValidatePurchaseEditorAction,
): PurchaseEditor {
    const newState: PurchaseEditor = {
        ...state,
        validated: true,
    };

    if (newState.name.value.length <= 0 || newState.name.value.length > 20) {
        newState.name = {
            value: state.name.value,
            errorMessage: 'Must be between 1 and 20 characters long',
        };
    }

    const cost = parseFloat(state.cost.value);
    if (isNaN(cost) || cost <= 0) {
        newState.cost = {
            value: state.cost.value,
            errorMessage: 'Must be a number greater than zero',
        };
    }

    return newState;
}
