import {Action} from 'redux';
import {ActionType} from './actionTypes';
import {HabbajetEditor, EditorField} from '../state';

export interface UpdateEditorFieldAction extends Action {
    type: ActionType.UPDATE_EDITOR_FIELD;
    fieldName: string;
    newValue: string;
}

export function updateEditorFieldAction(
    fieldName: string,
    newValue: string,
): UpdateEditorFieldAction {
    return {
        type: ActionType.UPDATE_EDITOR_FIELD,
        fieldName,
        newValue,
    };
}

export function updateEditorField(
    state: HabbajetEditor,
    action: UpdateEditorFieldAction,
): HabbajetEditor {
    const newState = {
        ...state,
    };

    let fieldToUpdate: EditorField;
    switch (action.fieldName) {
        case 'Name':
            newState.name = {...state.name};
            fieldToUpdate = newState.name;
            break;
        case 'Value':
            newState.value = {...state.value};
            fieldToUpdate = newState.value;
            break;
        case 'Modifier':
            newState.modifier = {...state.modifier};
            fieldToUpdate = newState.modifier;
            break;
        default:
            return state;
    }

    fieldToUpdate.value = action.newValue;
    fieldToUpdate.errorMessage = '';
    newState.validated = false;

    return newState;
}
