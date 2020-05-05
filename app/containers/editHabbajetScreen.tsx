import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addHabbajetAction,
    updateEditorFieldAction,
    validateEditorAction,
    clearEditorAction,
    deleteHabbajetAction,
} from '../actions';
import {goBack, goToHome} from '../navigation';
import {saveState} from '../storage';
import {
    getHabbajetEditorFields,
    getValidationStateForNewHabbajet,
    getValuesForNewHabbajet,
    getUnselectedHabbajetNames,
    getSelectedHabbajet,
} from '../selectors';
import HabbajetForm from '../components/habbajetForm';
import ConfirmationModal from '../components/confirmationModal';
import {View} from 'react-native';

const EditHabbajetScreen = () => {
    const dispatch = useDispatch();
    const fields = useSelector(getHabbajetEditorFields);
    const isValid = useSelector(getValidationStateForNewHabbajet);
    const newHabbajet = useSelector(getValuesForNewHabbajet);
    const selectedHabbajet = useSelector(getSelectedHabbajet);
    const habbajetNames = useSelector(getUnselectedHabbajetNames);
    const [modalVisibility, setModalVisibility] = useState(false);

    if (isValid) {
        dispatch(clearEditorAction());
        dispatch(
            addHabbajetAction(
                newHabbajet.name,
                newHabbajet.value,
                newHabbajet.modifier,
                newHabbajet.slack,
                newHabbajet.color,
                selectedHabbajet ? selectedHabbajet.id : undefined,
            ),
        );
        goBack();
        saveState();
    }

    return (
        <View>
            <ConfirmationModal
                text={'Are you sure you want to delete this habbajet?'}
                visible={modalVisibility}
                onConfirm={() => {
                    goToHome();
                    dispatch(deleteHabbajetAction());
                    saveState();
                }}
                onDismiss={() => {
                    setModalVisibility(false);
                }}
            />
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
                onDelete={() => setModalVisibility(true)}
            />
        </View>
    );
};

export default EditHabbajetScreen;
