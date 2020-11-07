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

function updateDateAndDangerDays(habbajet: Habbajet, result: boolean) {
    const date = moment(habbajet.date);
    const dayOfWeek = date.isoWeekday() - 1;

    if (!result) {
        const dd = habbajet.dangerDays;
        habbajet.dangerDays = [dd[0], dd[1], dd[2], dd[3], dd[4], dd[5], dd[6]];
        habbajet.dangerDays[dayOfWeek]++;
    }

    date.add(1, 'day');
    if (date.day() === 1) {
        habbajet.toClaim = true;
    }
    habbajet.date = date.toISOString();
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

    updateDateAndDangerDays(edited, action.result);

    newState[index] = edited;
    return newState;
}
