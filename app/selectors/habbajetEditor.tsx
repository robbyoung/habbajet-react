import {State} from '../state';

export function getEditorNameField(state: State) {
    return state.habbajetEditor.name;
}

export function getEditorValueField(state: State) {
    return state.habbajetEditor.value;
}

export function getEditorModifierField(state: State) {
    return state.habbajetEditor.modifier;
}

export function getValuesForNewHabbajet(state: State) {
    const name = state.habbajetEditor.name.value;
    const value = parseInt(state.habbajetEditor.value.value, 10) || 50;
    const modifier = parseInt(state.habbajetEditor.modifier.value, 10) || 2;
    const color = state.habbajetEditor.color;

    return {
        name,
        value,
        modifier,
        color,
    };
}
