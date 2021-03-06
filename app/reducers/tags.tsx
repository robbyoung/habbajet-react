import {Action} from 'redux';
import {Tag} from '../state';
import {habbajetColors} from '../colors';
import {
    ActionType,
    addTag,
    AddTagAction,
    LoadStateAction,
    loadTags,
    DeleteTagAction,
    deleteTag,
} from '../actions';

export const DEFAULT_TAGS: Tag[] = [
    {name: 'Living', color: habbajetColors[0], id: '0'},
    {name: 'Groceries', color: habbajetColors[2], id: '1'},
];

export default function tagReducer(
    state: Tag[] = DEFAULT_TAGS,
    action: Action,
): Tag[] {
    switch (action.type) {
        case ActionType.ADD_TAG:
            return addTag(state, action as AddTagAction);
        case ActionType.LOAD_STATE:
            return loadTags(state, action as LoadStateAction);
        case ActionType.DELETE_TAG:
            return deleteTag(state, action as DeleteTagAction);
    }
    return state;
}
