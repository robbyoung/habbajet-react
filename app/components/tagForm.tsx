import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {grey, white} from '../colors';
import {EditorField} from '../state';
import FormField from './formField';
import WideButton from './wideButton';
import ColorPicker from './colorPicker';

const styles = StyleSheet.create({
    scroller: {
        height: '100%',
        backgroundColor: white,
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

interface TagFormProps {
    nameField: EditorField;
    selectedColor: string;
    onUpdate: (key: string, value: string) => void;
    onSubmit: () => void;
}
const TagForm = (props: TagFormProps) => {
    return (
        <ScrollView style={styles.scroller}>
            <View style={styles.container}>
                <FormField
                    field={props.nameField}
                    title="Name"
                    onValueChange={value => props.onUpdate('Name', value)}
                />
                <ColorPicker
                    selected={props.selectedColor}
                    onSelect={selected => props.onUpdate('Color', selected)}
                />
                <WideButton
                    text="Done"
                    testID="button-submit"
                    onPress={() => props.onSubmit()}
                    color={grey}
                />
            </View>
        </ScrollView>
    );
};

export default TagForm;
