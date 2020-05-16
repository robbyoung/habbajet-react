import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet, HabitResult} from '../state';

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

    let newResult = action.result ? HabitResult.Success : HabitResult.Failure;
    if (edited.remainingSlack > 0 && !action.result) {
        newResult = HabitResult.SlackSuccess;
    }
    edited.results = [...edited.results, newResult];

    const isSuccess = action.result || edited.remainingSlack > 0;
    if (isSuccess) {
        edited.currentStreak++;
        if (edited.currentStreak > edited.bestStreak) {
            edited.bestStreak = edited.currentStreak;
        }
        if (!action.result) {
            edited.remainingSlack--;
        }
    } else {
        edited.currentValue /= edited.modifier;
        edited.currentStreak = 0;
    }

    newState[index] = edited;
    return newState;
}
