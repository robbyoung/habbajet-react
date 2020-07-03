import {State} from '../state';

export function getTagNameField(state: State) {
    return state.tagEditor.name;
}

export function getValuesForNewTag(state: State) {
    const name = state.tagEditor.name.value;
    const color = state.tagEditor.color;

    return {
        name,
        color,
    };
}

export function getValidationStateForNewTag(state: State) {
    return (
        state.tagEditor.name.errorMessage === '' && state.tagEditor.validated
    );
}
