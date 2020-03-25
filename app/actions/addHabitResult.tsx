import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface AddHabitResultAction extends Action {
    type: ActionType.ADD_HABIT_RESULT;
    habbajetName: string;
    success: boolean;
}

export function addHabitResultAction(
    habbajetName: string,
    success: boolean,
): AddHabitResultAction {
    return {
        type: ActionType.ADD_HABIT_RESULT,
        habbajetName,
        success,
    };
}

export function addHabitResult(
    state: Habbajet[],
    action: AddHabitResultAction,
): Habbajet[] {
    const index = state.findIndex(
        habbajet => habbajet.name === action.habbajetName,
    );
    if (index === undefined) {
        return state;
    }

    const newState = [...state];
    const edited: Habbajet = {...newState[index]};
    const date = moment(edited.date);

    date.add(1, 'day');
    edited.date = date.toISOString();
    if (action.success) {
        edited.successes++;
    }
    newState[index] = edited;

    return newState;
}
