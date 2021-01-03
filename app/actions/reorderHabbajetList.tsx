import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface ReorderHabbajetListAction extends Action {
    type: ActionType.REORDER_HABBAJET_LIST;
    habbajets: Habbajet[];
}

export function reorderHabbajetListAction(
    habbajets: Habbajet[],
): ReorderHabbajetListAction {
    return {
        type: ActionType.REORDER_HABBAJET_LIST,
        habbajets,
    };
}

export function reorderHabbajetList(
    _state: Habbajet[],
    action: ReorderHabbajetListAction,
): Habbajet[] {
    return [...action.habbajets];
}
