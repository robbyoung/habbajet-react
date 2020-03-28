import moment from 'moment';
import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface AddHabbajetAction extends Action {
    type: ActionType.ADD_HABBAJET;
    newHabbajet: Habbajet;
}

export function addHabbajetAction(
    name: string,
    value: number,
    factor: number,
    color: string,
): AddHabbajetAction {
    const monday = moment()
        .startOf('isoWeek')
        .toISOString();
    return {
        type: ActionType.ADD_HABBAJET,
        newHabbajet: {
            name,
            maxValue: value,
            currentValue: value / Math.pow(factor, 7),
            factor,
            successes: 0,
            color,
            date: monday,
            toClaim: false,
        },
    };
}

export function addHabbajet(
    state: Habbajet[],
    action: AddHabbajetAction,
): Habbajet[] {
    return [...state, action.newHabbajet];
}
