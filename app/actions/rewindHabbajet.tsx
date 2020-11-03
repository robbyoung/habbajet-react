import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface RewindHabbajetAction extends Action {
    type: ActionType.REWIND_HABBAJET;
}

export function rewindHabbajetAction(): RewindHabbajetAction {
    return {
        type: ActionType.REWIND_HABBAJET,
    };
}

export function rewindHabbajet(
    state: Habbajet[],
    _action: RewindHabbajetAction,
): Habbajet[] {
    const rewindIndex = state.findIndex(habbajet => habbajet.selected);

    if (rewindIndex === -1) {
        return state;
    }

    const newState = [...state];
    const original = state[rewindIndex];

    const daysCompleted = original.toClaim ? 7 : original.results.length % 7;
    const pastResults = original.results.slice(
        0,
        original.results.length - daysCompleted,
    );

    newState[rewindIndex] = {
        ...original,
        results: pastResults,
        date: moment(original.date)
            .subtract(original.toClaim ? 1 : 0, 'days')
            .startOf('isoWeek')
            .toISOString(),
        currentValue: original.maxValue,
        currentStreak: original.oldStreaks[0],
        bestStreak: original.oldStreaks[1],
        remainingSlack: original.totalSlack,
        toClaim: false,
        dangerDays: original.dangerDays,
    };

    return newState;
}
