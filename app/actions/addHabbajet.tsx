import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';
import * as uuid from 'uuid';

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
    };

    return newState;
}
