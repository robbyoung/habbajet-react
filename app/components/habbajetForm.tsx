import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {grey, white, errorRed} from '../colors';
import {EditorField} from '../state';
import FormField from './formField';
import ColorPicker from './colorPicker';
import WideButton from './wideButton';
import {
    OptionsModalPresentationStyle,
    Navigation,
} from 'react-native-navigation';

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
    const onHelp = (title: string, content: string) => {
        Navigation.showModal({
            component: {
                name: 'modal.help',
                id: 'helpModal',
                passProps: {
                    id: 'helpModal',
                    title,
                    content,
                },
                options: {
                    modalPresentationStyle:
                        OptionsModalPresentationStyle.overCurrentContext,
                },
            },
        });
    };

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
                    testID="button-submit"
                    // onPress={() => props.onSubmit()}
                    onPress={() =>
                        onHelp(
                            'Help',
                            'This is help text. It will guide you on your way to better habit-tracking.',
                        )
                    }
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
