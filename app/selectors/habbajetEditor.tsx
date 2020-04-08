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
    const value = parseFloat(state.habbajetEditor.value.value) || 50;
    const modifier = parseFloat(state.habbajetEditor.modifier.value) || 2;
    const color = state.habbajetEditor.color;

    return {
        name,
        value,
        modifier,
        color,
    };
}

export function getValidationStateForNewHabbajet(state: State) {
    return (
        state.habbajetEditor.name.errorMessage === '' &&
        state.habbajetEditor.value.errorMessage === '' &&
        state.habbajetEditor.modifier.errorMessage === '' &&
        state.habbajetEditor.validated
    );
}
