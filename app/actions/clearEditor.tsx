import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {HabbajetEditor} from '../state';
import {DEFAULT_EDITOR_STATE} from '../state/defaults';

export interface ClearEditorAction extends Action {
    type: ActionType.CLEAR_EDITOR;
}

export function clearEditorAction(): ClearEditorAction {
    return {
        type: ActionType.CLEAR_EDITOR,
    };
}

export function clearEditor(
    _state: HabbajetEditor,
    _action: ClearEditorAction,
): HabbajetEditor {
    return DEFAULT_EDITOR_STATE;
}
