import {State} from '../state';

export function getBudget(state: State) {
    return state.budget;
}

export function getBudgetFormatted(state: State) {
    return `$${state.budget.toFixed(2)}`;
}
