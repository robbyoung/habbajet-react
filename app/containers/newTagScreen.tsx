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

const NewTagScreen = () => {
    const dispatch = useDispatch();
    const newTag = useSelector(getValuesForNewTag);
    const nameField = useSelector(getTagNameField);
    const validated = useSelector(getValidationStateForNewTag);

    if (validated) {
        const newTagAction = addTagAction(newTag.name, newTag.color);
        dispatch(clearTagEditorAction());
        dispatch(newTagAction);
        dispatch(updatePurchaseEditorAction('TagId', newTagAction.newTag.id));
        goBack();
        saveState();
    }

    return (
        <TagForm
            nameField={nameField}
            selectedColor={newTag.color}
            onUpdate={(key, value) =>
                dispatch(updateTagEditorAction(key, value))
            }
            onSubmit={() => dispatch(validateTagEditorAction())}
        />
    );
};

export default NewTagScreen;
