import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import WideButton from '../components/wideButton';
import {grey, white} from '../colors';
import {
    addPurchaseAction,
    updatePurchaseEditorAction,
    updateBudgetAction,
    clearPurchaseEditorAction,
    validatePurchaseEditorAction,
} from '../actions';
import {goBack, goToNewTag} from '../navigation';
import {
    getPurchaseNameField,
    getPurchaseCostField,
    getValuesForNewPurchase,
    getValidationStateForNewPurchase,
} from '../selectors/purchaseEditor';
import FormField from '../components/formField';
import {saveState} from '../storage';
import TagPicker from '../components/tagPicker';
import {getAllTags} from '../selectors/tags';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

const EditPurchaseScreen = () => {
    const dispatch = useDispatch();
    const nameField = useSelector(getPurchaseNameField);
    const costField = useSelector(getPurchaseCostField);
    const tags = useSelector(getAllTags);
    const newPurchase = useSelector(getValuesForNewPurchase);
    const isValid = useSelector(getValidationStateForNewPurchase);

    if (isValid) {
        dispatch(clearPurchaseEditorAction());
        dispatch(
            addPurchaseAction(
                newPurchase.name,
                newPurchase.cost,
                newPurchase.tagId,
            ),
        );
        dispatch(updateBudgetAction(-newPurchase.cost));
        goBack();
        saveState();
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <FormField
                    title="Name"
                    field={nameField}
                    onValueChange={value =>
                        dispatch(updatePurchaseEditorAction('Name', value))
                    }
                />
                <FormField
                    title="Cost"
                    field={costField}
                    numeric={true}
                    onValueChange={value =>
                        dispatch(updatePurchaseEditorAction('Cost', value))
                    }
                />
                <TagPicker
                    tags={tags}
                    selected={newPurchase.tagId}
                    onSelect={tagId =>
                        dispatch(updatePurchaseEditorAction('TagId', tagId))
                    }
                    onNewTag={() => goToNewTag()}
                />
                <WideButton
                    text="Done"
                    color={grey}
                    onPress={() => {
                        dispatch(validatePurchaseEditorAction());
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default EditPurchaseScreen;
