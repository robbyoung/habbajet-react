import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import WideButton from '../components/wideButton';
import {grey, white} from '../colors';
import {addPurchaseAction, updatePurchaseEditorAction, updateBudgetAction} from '../actions';
import {goBack} from '../navigation';
import {
    getPurchaseNameField,
    getPurchaseCostField,
    getValuesForNewPurchase,
} from '../selectors/purchaseEditor';
import FormField from '../components/formField';
import {saveState} from '../storage';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

const NewPurchaseScreen = () => {
    const dispatch = useDispatch();
    const nameField = useSelector(getPurchaseNameField);
    const costField = useSelector(getPurchaseCostField);
    const newPurchase = useSelector(getValuesForNewPurchase);

    return (
        <ScrollView style={styles.container}>
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
            <WideButton
                text="Done"
                color={grey}
                onPress={() => {
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
                }}
            />
        </ScrollView>
    );
};

export default NewPurchaseScreen;
