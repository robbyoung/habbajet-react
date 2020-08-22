import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {grey, errorRed} from '../colors';
import {EditorField} from '../state';
import IconButton from './iconButton';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import {
    OptionsModalPresentationStyle,
    Navigation,
} from 'react-native-navigation';

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
        color: grey,
    },
    input: {
        borderWidth: 1,
        borderColor: grey,
        fontSize: 30,
        fontFamily: 'Abel',
        paddingLeft: 10,
        flex: 1,
    },
    help: {
        marginTop: 13,
        marginLeft: 10,
    },
    error: {
        color: errorRed,
    },
});

interface FormFieldProps {
    field: EditorField;
    title: string;
    placeholder?: string;
    numeric?: boolean;
    multiline?: boolean;
    helpText?: string;
    onValueChange: (value: string) => void;
}
const FormField = (props: FormFieldProps) => {
    const hyphenatedTitle = props.title.replace(' ', '-');
    const errorMessage =
        props.field.errorMessage.length === 0 ? (
            <View />
        ) : (
            <Text style={[styles.title, styles.error]}>
                {props.field.errorMessage}
            </Text>
        );

    const onHelp = () => {
        Navigation.showModal({
            component: {
                name: 'modal.help',
                id: 'helpModal',
                passProps: {
                    id: 'helpModal',
                    title: props.title,
                    content: props.helpText || '',
                },
                options: {
                    modalPresentationStyle:
                        OptionsModalPresentationStyle.overCurrentContext,
                },
            },
        });
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>{props.title}</Text>
            <View style={styles.row}>
                <TextInput
                    value={props.field.value}
                    placeholder={props.placeholder}
                    keyboardType={props.numeric ? 'numeric' : 'default'}
                    multiline={props.multiline || false}
                    onChangeText={value => props.onValueChange(value)}
                    style={styles.input}
                    testID={`input-${hyphenatedTitle}`}
                />
                {props.helpText !== undefined ? (
                    <IconButton
                        icon={faQuestion}
                        color={grey}
                        size={30}
                        onPress={() => onHelp()}
                        containerStyle={styles.help}
                        testID={`help-${hyphenatedTitle}`}
                    />
                ) : null}
            </View>
            {errorMessage}
        </View>
    );
};

export default FormField;
