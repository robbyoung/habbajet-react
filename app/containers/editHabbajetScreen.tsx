import React from 'react';
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
import {
    Navigation,
    OptionsModalPresentationStyle,
} from 'react-native-navigation';

const EditHabbajetScreen = () => {
    const dispatch = useDispatch();
    const fields = useSelector(getHabbajetEditorFields);
    const isValid = useSelector(getValidationStateForNewHabbajet);
    const newHabbajet = useSelector(getValuesForNewHabbajet);
    const selectedHabbajet = useSelector(getSelectedHabbajet);
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
                selectedHabbajet ? selectedHabbajet.id : undefined,
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
            onDelete={() =>
                Navigation.showModal({
                    component: {
                        name: 'modal.confirmation',
                        id: 'deleteModal',
                        passProps: {
                            id: 'deleteModal',
                            text:
                                'Are you sure you want to delete this habbajet?',
                            onConfirm: () => {
                                goToHome();
                                dispatch(deleteHabbajetAction());
                                saveState();
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

export default EditHabbajetScreen;
