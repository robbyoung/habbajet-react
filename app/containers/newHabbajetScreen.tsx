import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';
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
    getHabbajetEditorFields,
    getValidationStateForNewHabbajet,
    getHabbajetNames,
    getValuesForNewHabbajet,
} from '../selectors';
import ColorPicker from '../components/colorPicker';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
    bottomPadding: {
        height: 20,
    },
});

const NewHabbajetScreen = () => {
    const dispatch = useDispatch();
    const fields = useSelector(getHabbajetEditorFields);
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
                newHabbajet.slack,
                newHabbajet.color,
            ),
        );
        goBack();
        saveState();
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <FormField
                    field={fields.name}
                    title="Name"
                    onValueChange={value =>
                        dispatch(updateEditorFieldAction('Name', value))
                    }
                />
                <FormField
                    field={fields.value}
                    title="Value"
                    placeholder={'50'}
                    numeric={true}
                    onValueChange={value =>
                        dispatch(updateEditorFieldAction('Value', value))
                    }
                />
                <FormField
                    field={fields.modifier}
                    title="Modifier"
                    placeholder={'2'}
                    numeric={true}
                    onValueChange={value =>
                        dispatch(updateEditorFieldAction('Modifier', value))
                    }
                />
                <FormField
                    field={fields.slack}
                    title="Slack Days"
                    placeholder={'0'}
                    numeric={true}
                    onValueChange={value =>
                        dispatch(updateEditorFieldAction('Slack', value))
                    }
                />
                <ColorPicker
                    selected={newHabbajet.color}
                    onSelect={color =>
                        dispatch(updateEditorFieldAction('Color', color))
                    }
                />
                <WideButton
                    text="Done"
                    onPress={() => {
                        dispatch(validateEditorAction(habbajetNames));
                    }}
                    color={grey}
                />
            </View>
        </ScrollView>
    );
};

export default NewHabbajetScreen;
