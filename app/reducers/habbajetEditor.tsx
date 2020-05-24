import {Action} from 'redux';
import {HabbajetEditor} from '../state';
import {
    ActionType,
    UpdateEditorFieldAction,
    updateEditorField,
    ValidateEditorAction,
    validateEditor,
    clearEditor,
    ClearEditorAction,
    setHabbajetToEdit,
    SetHabbajetToEditAction,
} from '../actions';
import {DEFAULT_EDITOR_STATE} from '../state/defaults';

export default function habbajetEditorReducer(
    state: HabbajetEditor = DEFAULT_EDITOR_STATE,
    action: Action,
): HabbajetEditor {
    switch (action.type) {
        case ActionType.UPDATE_EDITOR_FIELD:
            return updateEditorField(state, action as UpdateEditorFieldAction);
        case ActionType.VALIDATE_EDITOR:
            return validateEditor(state, action as ValidateEditorAction);
        case ActionType.CLEAR_EDITOR:
            return clearEditor(state, action as ClearEditorAction);
        case ActionType.SET_HABBAJET_TO_EDIT:
            return setHabbajetToEdit(state, action as SetHabbajetToEditAction);
    }
    return state;
}
