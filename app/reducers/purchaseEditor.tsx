import {Action} from 'redux';
import {PurchaseEditor} from '../state';

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
    _action: Action,
): PurchaseEditor {
    return state;
}
