import {Action} from 'redux';
import {Purchase} from '../state';
import {
    ActionType,
    loadPurchases,
    LoadStateAction,
    AddPurchaseAction,
    addPurchase,
    DeletePurchaseAction,
    deletePurchase,
} from '../actions';

export default function purchasesReducer(
    state: Purchase[] = [],
    action: Action,
): Purchase[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadPurchases(state, action as LoadStateAction);
        case ActionType.ADD_PURCHASE:
            return addPurchase(state, action as AddPurchaseAction);
        case ActionType.DELETE_PURCHASE:
            return deletePurchase(state, action as DeletePurchaseAction);
    }
    return state;
}
