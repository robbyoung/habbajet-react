import {Action} from 'redux';
import {Purchase} from '../state';
import {ActionType, loadPurchases, LoadStateAction} from '../actions';

export default function purchasesReducer(
    state: Purchase[] = [],
    action: Action,
): Purchase[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadPurchases(state, action as LoadStateAction);
    }
    return state;
}
