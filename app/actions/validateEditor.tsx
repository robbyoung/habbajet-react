import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {HabbajetEditor} from '../state';

export interface ValidateEditorAction extends Action {
    type: ActionType.VALIDATE_EDITOR;
}

export function validateEditorAction(): ValidateEditorAction {
    return {
        type: ActionType.VALIDATE_EDITOR,
    };
}

export function validateEditor(
    state: HabbajetEditor,
    _action: ValidateEditorAction,
): HabbajetEditor {
    const newState: HabbajetEditor = {
        ...state,
        validated: true,
    };

    if (newState.name.value.length <= 0 || newState.name.value.length > 20) {
        newState.name = {
            value: state.name.value,
            errorMessage: 'Must be between 1 and 20 characters long',
        };
    }

    if (newState.value.value.length > 0) {
        const value = parseFloat(state.value.value);
        if (isNaN(value) || value <= 0) {
            newState.value = {
                value: state.value.value,
                errorMessage: 'Must be a number greater than zero',
            };
        }
    }

    if (newState.modifier.value.length > 0) {
        const modifier = parseFloat(state.modifier.value);
        if (isNaN(modifier) || modifier <= 0) {
            newState.modifier = {
                value: state.modifier.value,
                errorMessage: 'Must be a number greater than 1',
            };
        }
    }

    return newState;
}
