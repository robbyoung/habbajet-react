import {State} from '../state';

export function getEditorNameField(state: State) {
    return state.habbajetEditor.name;
}

export function getEditorValueField(state: State) {
    return state.habbajetEditor.value;
}
