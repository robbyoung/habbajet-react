import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet, HabitResult} from '../state';
import uuid from 'react-native-uuid';

export interface AddHabbajetAction extends Action {
    type: ActionType.ADD_HABBAJET;
    newHabbajet: Habbajet;
}

export function addHabbajetAction(
    name: string,
    value: number,
    modifier: number,
    slack: number,
    color: string,
    id: string = uuid.v4().valueOf(),
): AddHabbajetAction {
    const monday = moment()
        .startOf('isoWeek')
        .toISOString();
    return {
        type: ActionType.ADD_HABBAJET,
        newHabbajet: {
            id,
            name,
            maxValue: value,
            currentValue: value / Math.pow(modifier, 7),
            modifier,
            results: [],
            color,
            date: monday,
            toClaim: false,
            selected: false,
            currentStreak: 0,
            bestStreak: 0,
            oldStreaks: [0, 0],
            totalSlack: slack,
            remainingSlack: slack,
        },
    };
}

export function addHabbajet(
    state: Habbajet[],
    action: AddHabbajetAction,
): Habbajet[] {
    const replaceIndex = state.findIndex(
        habbajet => habbajet.id === action.newHabbajet.id,
    );

    if (replaceIndex === -1) {
        return [...state, action.newHabbajet];
    }

    const newState = [...state];
    const edited = action.newHabbajet;
    const original = state[replaceIndex];

    newState[replaceIndex] = {
        ...original,
        name: edited.name,
        maxValue: edited.maxValue,
        modifier: edited.modifier,
        totalSlack: edited.totalSlack,
        color: edited.color,
        selected: true,
    };

    const needsRedoing =
        original.maxValue !== edited.maxValue ||
        original.modifier !== edited.modifier ||
        original.totalSlack !== edited.totalSlack;
    if (needsRedoing) {
        redoWeek(newState[replaceIndex]);
    }

    return newState;
}

function redoWeek(habbajet: Habbajet) {
    const daysCompleted = habbajet.toClaim ? 7 : habbajet.results.length % 7;
    const pastResults = habbajet.results.slice(
        0,
        habbajet.results.length - daysCompleted,
    );
    const daysToReset = habbajet.results.slice(
        habbajet.results.length - daysCompleted,
    );

    habbajet.currentValue = habbajet.maxValue / Math.pow(habbajet.modifier, 7);
    habbajet.results = pastResults;
    habbajet.remainingSlack = habbajet.totalSlack;
    habbajet.currentStreak = habbajet.oldStreaks[0];
    habbajet.bestStreak = habbajet.oldStreaks[1];

    for (let result of daysToReset) {
        const passed = result === HabitResult.Success;
        let newResult = passed ? HabitResult.Success : HabitResult.Failure;
        if (habbajet.remainingSlack > 0 && !passed) {
            newResult = HabitResult.SlackSuccess;
        }
        habbajet.results = [...habbajet.results, newResult];

        const isSuccess = passed || habbajet.remainingSlack > 0;
        if (isSuccess) {
            habbajet.currentValue *= habbajet.modifier;
            habbajet.currentStreak++;
            if (habbajet.currentStreak > habbajet.bestStreak) {
                habbajet.bestStreak = habbajet.currentStreak;
            }
            if (!passed) {
                habbajet.remainingSlack--;
            }
        } else {
            habbajet.currentStreak = 0;
        }
    }
}
