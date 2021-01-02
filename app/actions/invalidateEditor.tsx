import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {HabbajetEditor} from '../state';

export interface InvalidateEditorAction extends Action {
    type: ActionType.INVALIDATE_EDITOR;
}

export function invalidateEditorAction(): InvalidateEditorAction {
    return {
        type: ActionType.INVALIDATE_EDITOR,
    };
}

export function invalidateEditor(
    state: HabbajetEditor,
    _action: InvalidateEditorAction,
): HabbajetEditor {
    return {
        ...state,
        validated: false,
    };
}
