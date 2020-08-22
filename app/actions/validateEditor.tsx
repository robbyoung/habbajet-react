import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {HabbajetEditor} from '../state';

export interface ValidateEditorAction extends Action {
    type: ActionType.VALIDATE_EDITOR;
    existingNames: string[];
}

export function validateEditorAction(
    existingNames: string[],
): ValidateEditorAction {
    return {
        type: ActionType.VALIDATE_EDITOR,
        existingNames,
    };
}

export function validateEditor(
    state: HabbajetEditor,
    action: ValidateEditorAction,
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

    if (action.existingNames.find(name => name === state.name.value)) {
        newState.name = {
            value: state.name.value,
            errorMessage: 'Used by an existing habit',
        };
    }

    if (newState.description.value.length > 300) {
        newState.description = {
            value: state.description.value,
            errorMessage: 'Can be at most 300 characters',
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
        if (isNaN(modifier) || modifier <= 1) {
            newState.modifier = {
                value: state.modifier.value,
                errorMessage: 'Must be a number greater than one',
            };
        }
    }

    if (newState.slack.value.length > 0) {
        const slack = parseFloat(state.slack.value);
        if ([0, 1, 2, 3, 4, 5, 6].indexOf(slack) === -1) {
            newState.slack = {
                value: state.slack.value,
                errorMessage: 'Must be an integer between zero and six',
            };
        }
    }

    return newState;
}
