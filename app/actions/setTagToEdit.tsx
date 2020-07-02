import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {TagEditor, Tag} from '../state';

export interface SetTagToEditAction extends Action {
    type: ActionType.SET_TAG_TO_EDIT;
    tag: Tag;
}

export function setTagToEditAction(tag: Tag): SetTagToEditAction {
    return {
        type: ActionType.SET_TAG_TO_EDIT,
        tag,
    };
}

export function setTagToEdit(
    _state: TagEditor,
    action: SetTagToEditAction,
): TagEditor {
    return {
        name: {
            value: action.tag.name,
            errorMessage: '',
        },
        color: action.tag.color,
        id: action.tag.id,
        validated: false,
    };
}
