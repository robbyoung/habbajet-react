import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {HabbajetEditor, Habbajet} from '../state';

export interface SetHabbajetToEditAction extends Action {
    type: ActionType.SET_HABBAJET_TO_EDIT;
    habbajet: Habbajet;
}

export function setHabbajetToEditAction(
    habbajet: Habbajet,
): SetHabbajetToEditAction {
    return {
        type: ActionType.SET_HABBAJET_TO_EDIT,
        habbajet,
    };
}

export function setHabbajetToEdit(
    _state: HabbajetEditor,
    action: SetHabbajetToEditAction,
): HabbajetEditor {
    return {
        name: {
            value: action.habbajet.name,
            errorMessage: '',
        },
        description: {
            value: action.habbajet.description,
            errorMessage: '',
        },
        value: {
            value: `${action.habbajet.maxValue}`,
            errorMessage: '',
        },
        modifier: {
            value: `${action.habbajet.modifier}`,
            errorMessage: '',
        },
        slack: {
            value: `${action.habbajet.totalSlack}`,
            errorMessage: '',
        },
        color: action.habbajet.color,
        validated: false,
    };
}
