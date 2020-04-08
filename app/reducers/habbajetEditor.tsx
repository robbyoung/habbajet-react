import {Action} from 'redux';
import {HabbajetEditor} from '../state';
import {
    ActionType,
    UpdateEditorFieldAction,
    updateEditorField,
    ValidateEditorAction,
    validateEditor,
} from '../actions';
import {habbajetColors} from '../colors';

const EMPTY_FIELD = {
    value: '',
    errorMessage: '',
};
export const DEFAULT_EDITOR_STATE: HabbajetEditor = {
    name: EMPTY_FIELD,
    value: EMPTY_FIELD,
    modifier: EMPTY_FIELD,
    color: habbajetColors[0],
    validated: false,
};

export default function habbajetEditorReducer(
    state: HabbajetEditor = DEFAULT_EDITOR_STATE,
    action: Action,
): HabbajetEditor {
    switch (action.type) {
        case ActionType.UPDATE_EDITOR_FIELD:
            return updateEditorField(state, action as UpdateEditorFieldAction);
        case ActionType.VALIDATE_EDITOR:
            return validateEditor(state, action as ValidateEditorAction);
    }
    return state;
}
