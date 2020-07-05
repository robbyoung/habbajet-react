import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    updatePurchaseEditorAction,
    addTagAction,
    updateTagEditorAction,
    validateTagEditorAction,
    clearTagEditorAction,
} from '../actions';
import {goBack} from '../navigation/navigation';
import {saveState} from '../storage';
import {
    getValuesForNewTag,
    getValidationStateForNewTag,
    getTagNameField,
} from '../selectors/tagEditor';
import TagForm from '../components/tagForm';

const EditTagScreen = () => {
    const dispatch = useDispatch();
    const editedTag = useSelector(getValuesForNewTag);
    const nameField = useSelector(getTagNameField);
    const validated = useSelector(getValidationStateForNewTag);

    if (validated) {
        const newTagAction = addTagAction(
            editedTag.name,
            editedTag.color,
            editedTag.id,
        );
        dispatch(clearTagEditorAction());
        dispatch(newTagAction);
        dispatch(updatePurchaseEditorAction('TagId', newTagAction.newTag.id));
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
            onSubmit={() => dispatch(validateTagEditorAction())}
        />
    );
};

export default EditTagScreen;
