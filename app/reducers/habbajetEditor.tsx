import {Action} from 'redux';
import {HabbajetEditor} from '../state';
import {
    ActionType,
    UpdateEditorFieldAction,
    updateEditorField,
} from '../actions';

export const DEFAULT_EDITOR_STATE: HabbajetEditor = {
    name: {
        value: '',
        errorMessage: '',
    },
    value: {
        value: '',
        errorMessage: '',
    },
    color: '',
};

export default function habbajetEditorReducer(
    state: HabbajetEditor = DEFAULT_EDITOR_STATE,
    action: Action,
): HabbajetEditor {
    switch (action.type) {
        case ActionType.UPDATE_EDITOR_FIELD:
            return updateEditorField(state, action as UpdateEditorFieldAction);
    }
    return state;
}
