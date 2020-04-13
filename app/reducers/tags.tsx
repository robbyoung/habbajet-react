import {Action} from 'redux';
import {Tag} from '../state';
import {ActionType, LoadStateAction, loadTags} from '../actions';

export default function tagReducer(state: Tag[] = [], action: Action): Tag[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadTags(state, action as LoadStateAction);
    }
    return state;
}
