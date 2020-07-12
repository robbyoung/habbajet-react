import {Action} from 'redux';
import {TagEditor} from '../state';
import {
    ActionType,
    updateTagEditor,
    validateTagEditor,
    ValidateTagEditorAction,
    UpdateTagEditorAction,
    clearTagEditor,
    ClearTagEditorAction,
    setTagToEdit,
    SetTagToEditAction,
} from '../actions';
import {DEFAULT_TAG_EDITOR_STATE} from '../state/defaults';
export default function purchaseEditorReducer(
    state: TagEditor = DEFAULT_TAG_EDITOR_STATE,
    action: Action,
): TagEditor {
    switch (action.type) {
        case ActionType.UPDATE_TAG_EDITOR:
            return updateTagEditor(state, action as UpdateTagEditorAction);
        case ActionType.CLEAR_TAG_EDITOR:
            return clearTagEditor(state, action as ClearTagEditorAction);
        case ActionType.VALIDATE_TAG_EDITOR:
            return validateTagEditor(state, action as ValidateTagEditorAction);
        case ActionType.SET_TAG_TO_EDIT:
            return setTagToEdit(state, action as SetTagToEditAction);
    }
    return state;
}
