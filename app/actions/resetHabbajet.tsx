import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface ResetHabbajetAction extends Action {
    type: ActionType.RESET_HABBAJET;
}

export function resetHabbajetAction(): ResetHabbajetAction {
    return {
        type: ActionType.RESET_HABBAJET,
    };
}

export function resetHabbajet(
    state: Habbajet[],
    _action: ResetHabbajetAction,
): Habbajet[] {
    const index = state.findIndex(habbajet => habbajet.selected);
    if (index === undefined) {
        return state;
    }

    const newState = [...state];
    const edited: Habbajet = {...newState[index]};
    edited.currentValue = edited.maxValue;
    edited.toClaim = false;
    edited.results = [];
    edited.remainingSlack = edited.totalSlack;
    edited.oldStreaks = [edited.currentStreak, edited.bestStreak];
    newState[index] = edited;

    return newState;
}
