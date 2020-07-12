import {State, Tag} from '../state';

export function getAllTags(state: State): Tag[] {
    return state.tags;
}

export function getUnavailableTagNames(state: State): string[] {
    return state.tags
        .filter(tag => tag.id !== state.tagEditor.id)
        .map(tag => tag.name);
}
