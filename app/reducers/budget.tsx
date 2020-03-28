import {Action} from 'redux';
import {
    ActionType,
    updateBudget,
    UpdateBudgetAction,
    loadBudget,
    LoadStateAction,
} from '../actions';

export default function budgetReducer(
    state: number = 0,
    action: Action,
): number {
    switch (action.type) {
        case ActionType.UPDATE_BUDGET:
            return updateBudget(state, action as UpdateBudgetAction);
        case ActionType.LOAD_STATE:
            return loadBudget(state, action as LoadStateAction);
    }
    return state;
}
