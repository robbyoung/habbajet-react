import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface DeleteHabbajetAction extends Action {
    type: ActionType.DELETE_HABBAJET;
}

export function deleteHabbajetAction(): DeleteHabbajetAction {
    return {
        type: ActionType.DELETE_HABBAJET,
    };
}

export function deleteHabbajet(
    state: Habbajet[],
    _action: DeleteHabbajetAction,
): Habbajet[] {
    return state.filter(habbajet => !habbajet.selected);
}
