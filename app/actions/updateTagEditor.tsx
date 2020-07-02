import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {TagEditor} from '../state';

export interface UpdateTagEditorAction extends Action {
    type: ActionType.UPDATE_TAG_EDITOR;
    fieldName: string;
    newValue: string;
}

export function updateTagEditorAction(
    fieldName: string,
    newValue: string,
): UpdateTagEditorAction {
    return {
        type: ActionType.UPDATE_TAG_EDITOR,
        fieldName,
        newValue,
    };
}

export function updateTagEditor(
    state: TagEditor,
    action: UpdateTagEditorAction,
): TagEditor {
    const newState = {
        ...state,
    };

    if (action.fieldName === 'Name') {
        newState.name = {value: action.newValue, errorMessage: ''};
        newState.validated = false;
    } else if (action.fieldName === 'Color') {
        newState.color = action.newValue;
        newState.validated = false;
    }

    return newState;
}
