import {State} from '../state';

export function getEditorNameField(state: State) {
    return state.habbajetEditor.name;
}

export function getEditorValueField(state: State) {
    return state.habbajetEditor.value;
}

export function getValuesForNewHabbajet(state: State) {
    const habbajetName = state.habbajetEditor.name.value;
    const value = parseInt(state.habbajetEditor.value.value, 10);

    return [habbajetName, value];
}
