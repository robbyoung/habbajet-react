import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Tag} from '../state';
import * as uuid from 'uuid';

export interface AddTagAction extends Action {
    type: ActionType.ADD_TAG;
    newTag: Tag;
}

export function addTagAction(name: string, color: string): AddTagAction {
    return {
        type: ActionType.ADD_TAG,
        newTag: {
            name,
            color,
            id: uuid.v4(),
        },
    };
}

export function addTag(state: Tag[], action: AddTagAction): Tag[] {
    return [...state, action.newTag];
}
