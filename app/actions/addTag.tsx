import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {Tag} from '../state';
import uuid from 'react-native-uuid';

export interface AddTagAction extends Action {
    type: ActionType.ADD_TAG;
    newTag: Tag;
}

export function addTagAction(
    name: string,
    color: string,
    id: string = uuid.v4(),
): AddTagAction {
    return {
        type: ActionType.ADD_TAG,
        newTag: {
            name,
            color,
            id,
        },
    };
}

export function addTag(state: Tag[], action: AddTagAction): Tag[] {
    const newState = [...state];

    const editIndex = newState.findIndex(tag => tag.id === action.newTag.id);
    if (editIndex !== -1) {
        newState[editIndex] = action.newTag;
    } else {
        newState.push(action.newTag);
    }

    return newState;
}
