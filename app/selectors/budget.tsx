import {State} from '../state';

export function getBudgetFormatted(state: State) {
    const negative = state.budget < 0;
    const formatted = `$${Math.abs(state.budget).toFixed(2)}`;

    return negative ? `-${formatted}` : formatted;
}
