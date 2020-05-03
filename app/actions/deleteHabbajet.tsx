import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface DeleteHabbajetAction extends Action {
    type: ActionType.DELETE_HABBAJET;
    habbajetId: string;
}

export function deleteHabbajetAction(habbajetId: string): DeleteHabbajetAction {
    return {
        type: ActionType.DELETE_HABBAJET,
        habbajetId,
    };
}

export function deleteHabbajet(
    state: Habbajet[],
    action: DeleteHabbajetAction,
): Habbajet[] {
    return state.filter(habbajet => habbajet.id !== action.habbajetId);
}
