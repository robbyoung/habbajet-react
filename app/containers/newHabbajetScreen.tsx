import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StyleSheet} from 'react-native';
import {
    addHabbajetAction,
    updateEditorFieldAction,
    validateEditorAction,
    clearEditorAction,
} from '../actions';
import WideButton from '../components/wideButton';
import {grey, white} from '../colors';
import {goBack} from '../navigation';
import {saveState} from '../storage';
import FormField from '../components/formField';
import {
    getEditorNameField,
    getEditorValueField,
    getValuesForNewHabbajet,
    getEditorModifierField,
    getValidationStateForNewHabbajet,
    getHabbajetNames,
} from '../selectors';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

const NewHabbajetScreen = () => {
    const dispatch = useDispatch();
    const nameField = useSelector(getEditorNameField);
    const valueField = useSelector(getEditorValueField);
    const modifierField = useSelector(getEditorModifierField);
    const isValid = useSelector(getValidationStateForNewHabbajet);
    const newHabbajet = useSelector(getValuesForNewHabbajet);
    const habbajetNames = useSelector(getHabbajetNames);

    if (isValid) {
        dispatch(clearEditorAction());
        dispatch(
            addHabbajetAction(
                newHabbajet.name,
                newHabbajet.value,
                newHabbajet.modifier,
                newHabbajet.color,
            ),
        );
        goBack();
        saveState();
    }

    return (
        <ScrollView style={styles.container}>
            <FormField
                field={nameField}
                title="Name"
                onValueChange={value =>
                    dispatch(updateEditorFieldAction('Name', value))
                }
            />
            <FormField
                field={valueField}
                title="Value"
                placeholder={'50'}
                numeric={true}
                onValueChange={value =>
                    dispatch(updateEditorFieldAction('Value', value))
                }
            />
            <FormField
                field={modifierField}
                title="Modifier"
                placeholder={'2'}
                numeric={true}
                onValueChange={value =>
                    dispatch(updateEditorFieldAction('Modifier', value))
                }
            />
            <WideButton
                text="Done"
                onPress={() => {
                    dispatch(validateEditorAction(habbajetNames));
                }}
                color={grey}
            />
        </ScrollView>
    );
};

export default NewHabbajetScreen;
