import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface AddHabitResultAction extends Action {
    type: ActionType.ADD_HABIT_RESULT;
    habbajetName: string;
    result: boolean;
}

export function addHabitResultAction(
    habbajetName: string,
    result: boolean,
): AddHabitResultAction {
    return {
        type: ActionType.ADD_HABIT_RESULT,
        habbajetName,
        result,
    };
}

export function addHabitResult(
    state: Habbajet[],
    action: AddHabitResultAction,
): Habbajet[] {
    const index = state.findIndex(
        habbajet => habbajet.name === action.habbajetName,
    );
    if (index === -1) {
        return state;
    }

    const newState = [...state];
    const edited: Habbajet = {...newState[index]};
    const date = moment(edited.date);

    date.add(1, 'day');
    if (date.day() === 1) {
        edited.toClaim = true;
    }

    edited.date = date.toISOString();
    edited.results = [...edited.results, action.result];
    if (action.result) {
        edited.currentValue *= edited.factor;
    }

    newState[index] = edited;
    return newState;
}
