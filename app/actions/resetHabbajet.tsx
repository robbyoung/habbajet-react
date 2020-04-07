import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface ResetHabbajetAction extends Action {
    type: ActionType.RESET_HABBAJET;
    habbajetName: string;
}

export function resetHabbajetAction(habbajetName: string): ResetHabbajetAction {
    return {
        type: ActionType.RESET_HABBAJET,
        habbajetName,
    };
}

export function resetHabbajet(
    state: Habbajet[],
    action: ResetHabbajetAction,
): Habbajet[] {
    const index = state.findIndex(
        habbajet => habbajet.name === action.habbajetName,
    );
    if (index === undefined) {
        return state;
    }

    const newState = [...state];
    const edited: Habbajet = {...newState[index]};
    edited.currentValue = edited.maxValue / Math.pow(edited.modifier, 7);
    edited.toClaim = false;
    edited.results = [];
    newState[index] = edited;

    return newState;
}
