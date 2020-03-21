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
    color: string,
): AddHabbajetAction {
    const monday = moment()
        .startOf('isoWeek')
        .toISOString();
    return {
        type: ActionType.ADD_HABBAJET,
        newHabbajet: {
            name,
            value,
            successes: 0,
            color,
            date: monday,
        },
    };
}

export function addHabbajet(
    state: Habbajet[],
    action: AddHabbajetAction,
): Habbajet[] {
    return [...state, action.newHabbajet];
}
