import {Action} from 'redux';
import {HabbajetEditor} from '../state';

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
    _action: Action,
): HabbajetEditor {
    return state;
}
