import {State} from '../state';

export function getHabbajetEditorFields(state: State) {
    return {
        name: state.habbajetEditor.name,
        value: state.habbajetEditor.value,
        modifier: state.habbajetEditor.modifier,
        slack: state.habbajetEditor.slack,
    };
}

export function getValuesForNewHabbajet(state: State) {
    const name = state.habbajetEditor.name.value;
    const value = parseFloat(state.habbajetEditor.value.value) || 50;
    const modifier = parseFloat(state.habbajetEditor.modifier.value) || 2;
    const slack = parseFloat(state.habbajetEditor.slack.value) || 0;
    const color = state.habbajetEditor.color;

    return {
        name,
        value,
        modifier,
        slack,
        color,
    };
}

export function getValidationStateForNewHabbajet(state: State) {
    return (
        state.habbajetEditor.name.errorMessage === '' &&
        state.habbajetEditor.value.errorMessage === '' &&
        state.habbajetEditor.modifier.errorMessage === '' &&
        state.habbajetEditor.slack.errorMessage === '' &&
        state.habbajetEditor.validated
    );
}
