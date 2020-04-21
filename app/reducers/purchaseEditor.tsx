import {Action} from 'redux';
import {PurchaseEditor} from '../state';
import {
    updatePurchaseEditor,
    UpdatePurchaseEditorAction,
    ActionType,
    clearPurchaseEditor,
    ClearPurchaseEditorAction,
} from '../actions';

const EMPTY_FIELD = {
    value: '',
    errorMessage: '',
};
export const DEFAULT_PURCHASE_EDITOR_STATE: PurchaseEditor = {
    name: EMPTY_FIELD,
    cost: EMPTY_FIELD,
    tagId: '0',
    validated: false,
};

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
    }
    return state;
}
