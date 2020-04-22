import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {EditorField, PurchaseEditor} from '../state';

export interface UpdatePurchaseEditorAction extends Action {
    type: ActionType.UPDATE_PURCHASE_EDITOR;
    fieldName: string;
    newValue: string;
}

export function updatePurchaseEditorAction(
    fieldName: string,
    newValue: string,
): UpdatePurchaseEditorAction {
    return {
        type: ActionType.UPDATE_PURCHASE_EDITOR,
        fieldName,
        newValue,
    };
}

export function updatePurchaseEditor(
    state: PurchaseEditor,
    action: UpdatePurchaseEditorAction,
): PurchaseEditor {
    const newState = {
        ...state,
    };

    let fieldToUpdate: EditorField;
    switch (action.fieldName) {
        case 'Name':
            newState.name = {...state.name};
            fieldToUpdate = newState.name;
            break;
        case 'Cost':
            newState.cost = {...state.cost};
            fieldToUpdate = newState.cost;
            break;
        case 'TagId':
            newState.tagId = action.newValue;
            newState.validated = false;
            return newState;
        default:
            return state;
    }

    fieldToUpdate.value = action.newValue;
    fieldToUpdate.errorMessage = '';
    newState.validated = false;

    return newState;
}
