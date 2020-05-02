import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {grey, white} from '../colors';
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
    bottomPadding: {
        height: 20,
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
                />
                <FormField
                    field={props.modifierField}
                    title="Modifier"
                    placeholder={'2'}
                    numeric={true}
                    onValueChange={value => props.onUpdate('Modifier', value)}
                />
                <FormField
                    field={props.slackField}
                    title="Slack Days"
                    placeholder={'0'}
                    numeric={true}
                    onValueChange={value => props.onUpdate('Slack', value)}
                />
                <ColorPicker
                    selected={props.selectedColor}
                    onSelect={value => props.onUpdate('Color', value)}
                />
                <WideButton
                    text="Done"
                    onPress={() => props.onSubmit()}
                    color={grey}
                />
            </View>
        </ScrollView>
    );
};

export default HabbajetForm;
