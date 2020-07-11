import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Tag} from '../state';

export interface DeleteTagAction extends Action {
    type: ActionType.DELETE_TAG;
    id: string;
}

export function deleteTagAction(id: string): DeleteTagAction {
    return {
        type: ActionType.DELETE_TAG,
        id,
    };
}

export function deleteTag(state: Tag[], action: DeleteTagAction): Tag[] {
    return state.filter(tag => tag.id !== action.id);
}
