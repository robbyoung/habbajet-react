import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {grey} from '../colors';

const styles = StyleSheet.create({
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
        marginBottom: 15,
        fontSize: 20,
        fontFamily: 'Abel',
    },
});

interface FormFieldProps {
    title: string;
    value: string;
    onValueChange: (value: string) => void;
}
const FormField = (props: FormFieldProps) => {
    return (
        <View>
            <Text style={[styles.title]}>{props.title}</Text>
            <TextInput
                value={props.value}
                onChangeText={value => props.onValueChange(value)}
                style={styles.input}
            />
        </View>
    );
};

export default FormField;
