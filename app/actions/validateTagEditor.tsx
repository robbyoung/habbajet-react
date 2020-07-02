import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {TagEditor} from '../state';

export interface ValidateTagEditorAction extends Action {
    type: ActionType.VALIDATE_TAG_EDITOR;
}

export function validateTagEditorAction(): ValidateTagEditorAction {
    return {
        type: ActionType.VALIDATE_TAG_EDITOR,
    };
}

export function validateTagEditor(
    state: TagEditor,
    _action: ValidateTagEditorAction,
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

    return newState;
}
