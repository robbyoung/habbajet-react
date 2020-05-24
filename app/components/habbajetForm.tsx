import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {grey, white, errorRed} from '../colors';
import {EditorField} from '../state';
import FormField from './formField';
import ColorPicker from './colorPicker';
import WideButton from './wideButton';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

interface HabbajetFormProps {
    nameField: EditorField;
    valueField: EditorField;
    modifierField: EditorField;
    slackField: EditorField;
    selectedColor: string;
    onUpdate: (key: string, value: string) => void;
    onSubmit: () => void;
    onDelete?: () => void;
}
const HabbajetForm = (props: HabbajetFormProps) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <FormField
                    field={props.nameField}
                    title="Name"
                    onValueChange={value => props.onUpdate('Name', value)}
                />
                <FormField
                    field={props.valueField}
                    title="Value"
                    placeholder={'50'}
                    numeric={true}
                    onValueChange={value => props.onUpdate('Value', value)}
                    helpText="You'd get this much reward money for a perfect habit week."
                />
                <FormField
                    field={props.modifierField}
                    title="Modifier"
                    placeholder={'2'}
                    numeric={true}
                    onValueChange={value => props.onUpdate('Modifier', value)}
                    helpText="Your reward money is divided by this amount for every habit failure."
                />
                <FormField
                    field={props.slackField}
                    title="Slack Days"
                    placeholder={'0'}
                    numeric={true}
                    onValueChange={value => props.onUpdate('Slack', value)}
                    helpText="Determines how many habit failures you won't be penalized for. Resets each week."
                />
                <ColorPicker
                    selected={props.selectedColor}
                    onSelect={value => props.onUpdate('Color', value)}
                />
                <WideButton
                    text="Done"
                    testID="button-submit"
                    onPress={() => props.onSubmit()}
                    color={grey}
                />
                {props.onDelete ? (
                    <WideButton
                        text="Delete"
                        testID="button-delete"
                        onPress={() => (props.onDelete as () => void)()}
                        color={errorRed}
                    />
                ) : null}
            </View>
        </ScrollView>
    );
};

export default HabbajetForm;
