import {Action} from 'redux';
import {ActionType} from './actionTypes';

export interface UpdateBudgetAction extends Action {
    type: ActionType.UPDATE_BUDGET;
    amount: number;
}

export function updateBudgetAction(amount: number): UpdateBudgetAction {
    return {
        type: ActionType.UPDATE_BUDGET,
        amount,
    };
}

export function updateBudget(
    state: number,
    action: UpdateBudgetAction,
): number {
    return state + action.amount;
}
