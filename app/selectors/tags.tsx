import {State, Tag} from '../state';

export function getAllTags(state: State): Tag[] {
    return state.tags;
}
