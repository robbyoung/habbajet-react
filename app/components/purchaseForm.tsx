import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {grey, white} from '../colors';
import {EditorField, Tag} from '../state';
import FormField from './formField';
import WideButton from './wideButton';
import TagPicker from './tagPicker';

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

interface PurchaseFormProps {
    nameField: EditorField;
    costField: EditorField;
    tags: Tag[];
    selectedTagId: string;
    onNewTag: () => void;
    onUpdate: (key: string, value: string) => void;
    onSubmit: () => void;
}
const PurchaseForm = (props: PurchaseFormProps) => {
    return (
        <ScrollView style={styles.scroller}>
            <View style={styles.container}>
                <FormField
                    field={props.nameField}
                    title="Name"
                    onValueChange={value => props.onUpdate('Name', value)}
                />
                <FormField
                    title="Cost"
                    field={props.costField}
                    numeric={true}
                    onValueChange={value => props.onUpdate('Cost', value)}
                />
                <TagPicker
                    tags={props.tags}
                    selected={props.selectedTagId}
                    onSelect={value => props.onUpdate('TagId', value)}
                    onNewTag={props.onNewTag}
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

export default PurchaseForm;
