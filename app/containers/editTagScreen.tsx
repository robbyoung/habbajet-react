import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addTagAction,
    updateTagEditorAction,
    validateTagEditorAction,
    clearTagEditorAction,
    deleteTagAction,
} from '../actions';
import {goBack} from '../navigation/navigation';
import {saveState} from '../storage';
import {
    getValuesForNewTag,
    getValidationStateForNewTag,
    getTagNameField,
} from '../selectors/tagEditor';
import TagForm from '../components/tagForm';
import {
    Navigation,
    OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {getUnavailableTagNames} from '../selectors/tags';

const EditTagScreen = () => {
    const dispatch = useDispatch();
    const editedTag = useSelector(getValuesForNewTag);
    const nameField = useSelector(getTagNameField);
    const validated = useSelector(getValidationStateForNewTag);
    const unavailableNames = useSelector(getUnavailableTagNames);

    if (validated) {
        const newTagAction = addTagAction(
            editedTag.name,
            editedTag.color,
            editedTag.id,
        );
        dispatch(clearTagEditorAction());
        dispatch(newTagAction);
        goBack();
        saveState();
    }

    return (
        <TagForm
            nameField={nameField}
            selectedColor={editedTag.color}
            onUpdate={(key, value) =>
                dispatch(updateTagEditorAction(key, value))
            }
            onSubmit={() => dispatch(validateTagEditorAction(unavailableNames))}
            onDelete={() =>
                Navigation.showModal({
                    component: {
                        name: 'modal.confirmation',
                        id: 'deleteModal',
                        passProps: {
                            id: 'deleteModal',
                            text: 'Are you sure you want to delete this tag?',
                            onConfirm: () => {
                                goBack();
                                dispatch(deleteTagAction(editedTag.id || ''));
                                saveState();
                                Navigation.dismissModal('deleteModal');
                            },
                        },
                        options: {
                            modalPresentationStyle:
                                OptionsModalPresentationStyle.overCurrentContext,
                        },
                    },
                })
            }
        />
    );
};

export default EditTagScreen;
