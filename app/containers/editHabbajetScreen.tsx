import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addHabbajetAction,
    updateEditorFieldAction,
    validateEditorAction,
    clearEditorAction,
} from '../actions';
import {goBack} from '../navigation';
import {saveState} from '../storage';
import {
    getHabbajetEditorFields,
    getValidationStateForNewHabbajet,
    getValuesForNewHabbajet,
    getUnselectedHabbajetNames,
} from '../selectors';
import HabbajetForm from '../components/habbajetForm';

const EditHabbajetScreen = () => {
    const dispatch = useDispatch();
    const fields = useSelector(getHabbajetEditorFields);
    const isValid = useSelector(getValidationStateForNewHabbajet);
    const newHabbajet = useSelector(getValuesForNewHabbajet);
    const habbajetNames = useSelector(getUnselectedHabbajetNames);

    if (isValid) {
        dispatch(clearEditorAction());
        dispatch(
            addHabbajetAction(
                newHabbajet.name,
                newHabbajet.value,
                newHabbajet.modifier,
                newHabbajet.slack,
                newHabbajet.color,
            ),
        );
        goBack();
        saveState();
    }

    return (
        <HabbajetForm
            nameField={fields.name}
            valueField={fields.value}
            modifierField={fields.modifier}
            slackField={fields.slack}
            selectedColor={newHabbajet.color}
            onUpdate={(key, value) =>
                dispatch(updateEditorFieldAction(key, value))
            }
            onSubmit={() => {
                dispatch(validateEditorAction(habbajetNames));
            }}
        />
    );
};

export default EditHabbajetScreen;
