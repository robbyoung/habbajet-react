import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {TagEditor} from '../state';
import {DEFAULT_TAG_EDITOR_STATE} from '../state/defaults';

export interface ClearTagEditorAction extends Action {
    type: ActionType.CLEAR_TAG_EDITOR;
}

export function clearTagEditorAction(): ClearTagEditorAction {
    return {
        type: ActionType.CLEAR_TAG_EDITOR,
    };
}

export function clearTagEditor(
    _state: TagEditor,
    _action: ClearTagEditorAction,
): TagEditor {
    return DEFAULT_TAG_EDITOR_STATE;
}
