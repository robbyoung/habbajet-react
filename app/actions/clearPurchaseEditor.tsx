import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {PurchaseEditor} from '../state';
import {DEFAULT_PURCHASE_EDITOR_STATE} from '../state/defaults';

export interface ClearPurchaseEditorAction extends Action {
    type: ActionType.CLEAR_PURCHASE_EDITOR;
}

export function clearPurchaseEditorAction(): ClearPurchaseEditorAction {
    return {
        type: ActionType.CLEAR_PURCHASE_EDITOR,
    };
}

export function clearPurchaseEditor(
    _state: PurchaseEditor,
    _action: ClearPurchaseEditorAction,
): PurchaseEditor {
    return DEFAULT_PURCHASE_EDITOR_STATE;
}
