import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {TagEditor} from '../state';

export interface ValidateTagEditorAction extends Action {
    type: ActionType.VALIDATE_TAG_EDITOR;
    unavailableNames: string[];
}

export function validateTagEditorAction(
    unavailableNames: string[],
): ValidateTagEditorAction {
    return {
        type: ActionType.VALIDATE_TAG_EDITOR,
        unavailableNames,
    };
}

export function validateTagEditor(
    state: TagEditor,
    action: ValidateTagEditorAction,
): TagEditor {
    const newState: TagEditor = {
        ...state,
        validated: true,
    };

    if (newState.name.value.length <= 0 || newState.name.value.length > 20) {
        newState.name = {
            value: state.name.value,
            errorMessage: 'Must be between 1 and 20 characters long',
        };
    }

    if (action.unavailableNames.find(name => name === newState.name.value)) {
        newState.name = {
            value: state.name.value,
            errorMessage: 'There is already a tag with that name',
        };
    }

    return newState;
}
