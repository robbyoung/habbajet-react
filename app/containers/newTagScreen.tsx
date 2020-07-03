import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import WideButton from '../components/wideButton';
import {grey, white} from '../colors';
import {
    updatePurchaseEditorAction,
    addTagAction,
    updateTagEditorAction,
    validateTagEditorAction,
    clearTagEditorAction,
} from '../actions';
import {goBack} from '../navigation/navigation';
import FormField from '../components/formField';
import {saveState} from '../storage';
import ColorPicker from '../components/colorPicker';
import {
    getValuesForNewTag,
    getValidationStateForNewTag,
    getTagNameField,
} from '../selectors/tagEditor';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

const NewTagScreen = () => {
    const dispatch = useDispatch();
    const newTag = useSelector(getValuesForNewTag);
    const nameField = useSelector(getTagNameField);
    const validated = useSelector(getValidationStateForNewTag);

    if (validated) {
        const newTagAction = addTagAction(newTag.name, newTag.color);
        dispatch(clearTagEditorAction());
        dispatch(newTagAction);
        dispatch(updatePurchaseEditorAction('TagId', newTagAction.newTag.id));
        goBack();
        saveState();
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <FormField
                    title="Name"
                    field={nameField}
                    onValueChange={value => {
                        dispatch(updateTagEditorAction('Name', value));
                    }}
                />
                <ColorPicker
                    selected={newTag.color}
                    onSelect={selected =>
                        dispatch(updateTagEditorAction('Color', selected))
                    }
                />
                <WideButton
                    text="Done"
                    color={grey}
                    onPress={() => dispatch(validateTagEditorAction())}
                />
            </View>
        </ScrollView>
    );
};

export default NewTagScreen;
