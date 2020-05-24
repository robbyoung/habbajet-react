import {Action} from 'redux';
import {PurchaseEditor} from '../state';
import {
    updatePurchaseEditor,
    UpdatePurchaseEditorAction,
    ActionType,
    clearPurchaseEditor,
    ClearPurchaseEditorAction,
    ValidatePurchaseEditorAction,
    validatePurchaseEditor,
    SetPurchaseToEditAction,
    setPurchaseToEdit,
} from '../actions';
import {DEFAULT_PURCHASE_EDITOR_STATE} from '../state/defaults';

export default function purchaseEditorReducer(
    state: PurchaseEditor = DEFAULT_PURCHASE_EDITOR_STATE,
    action: Action,
): PurchaseEditor {
    switch (action.type) {
        case ActionType.UPDATE_PURCHASE_EDITOR:
            return updatePurchaseEditor(
                state,
                action as UpdatePurchaseEditorAction,
            );
        case ActionType.CLEAR_PURCHASE_EDITOR:
            return clearPurchaseEditor(
                state,
                action as ClearPurchaseEditorAction,
            );
        case ActionType.VALIDATE_PURCHASE_EDITOR:
            return validatePurchaseEditor(
                state,
                action as ValidatePurchaseEditorAction,
            );
        case ActionType.SET_PURCHASE_TO_EDIT:
            return setPurchaseToEdit(state, action as SetPurchaseToEditAction);
    }
    return state;
}
