import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Habbajet} from '../state';

export interface SelectHabbajetAction extends Action {
    type: ActionType.SELECT_HABBAJET;
    habbajetName: string;
}

export function selectHabbajetAction(
    habbajetName: string,
): SelectHabbajetAction {
    return {
        type: ActionType.SELECT_HABBAJET,
        habbajetName,
    };
}

export function selectHabbajet(
    state: Habbajet[],
    action: SelectHabbajetAction,
): Habbajet[] {
    const deselectIndex = state.findIndex(habbajet => habbajet.selected);
    const selectIndex = state.findIndex(
        habbajet => habbajet.name === action.habbajetName,
    );
    const newState = [...state];

    if (selectIndex === undefined || selectIndex === deselectIndex) {
        return state;
    }

    if (deselectIndex !== undefined) {
        const deselected: Habbajet = {...newState[deselectIndex]};
        deselected.selected = false;
        newState[deselectIndex] = deselected;
    }

    const selected: Habbajet = {...newState[selectIndex]};
    selected.selected = true;
    newState[selectIndex] = selected;

    return newState;
}
