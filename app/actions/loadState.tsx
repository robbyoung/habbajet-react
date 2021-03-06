import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet, State, Purchase, Tag} from '../state';

export interface LoadStateAction extends Action {
    type: ActionType.LOAD_STATE;
    state: State;
}

export function loadStateAction(state: State): LoadStateAction {
    return {
        type: ActionType.LOAD_STATE,
        state,
    };
}

export function loadHabbajets(
    state: Habbajet[],
    action: LoadStateAction,
): Habbajet[] {
    state = action.state.habbajets;

    state.forEach(habbajet => {
        if (habbajet.dangerDays === undefined) {
            habbajet.dangerDays = [0, 0, 0, 0, 0, 0, 0];
        }
    });

    return state;
}

export function loadPurchases(
    state: Purchase[],
    action: LoadStateAction,
): Purchase[] {
    return action.state.purchases;
}

export function loadBudget(state: number, action: LoadStateAction): number {
    return action.state.budget;
}

export function loadTags(state: Tag[], action: LoadStateAction): Tag[] {
    return action.state.tags;
}
