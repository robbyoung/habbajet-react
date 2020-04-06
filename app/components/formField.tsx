import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {grey, errorRed} from '../colors';
import {EditorField} from '../state';

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
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
    onValueChange: (value: string) => void;
}
const FormField = (props: FormFieldProps) => {
    const errorMessage =
        props.field.errorMessage.length === 0 ? (
            <View />
        ) : (
            <Text style={[styles.title, styles.error]}>
                {props.field.errorMessage}
            </Text>
        );

    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>{props.title}</Text>
            <TextInput
                value={props.field.value}
                placeholder={props.placeholder}
                keyboardType={props.numeric ? 'numeric' : 'default'}
                onChangeText={value => props.onValueChange(value)}
                style={styles.input}
            />
            {errorMessage}
        </View>
    );
};

export default FormField;
