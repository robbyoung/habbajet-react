import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import {saveState} from '../storage';
import {getAllTags} from '../selectors/tags';
import PurchaseForm from '../components/purchaseForm';

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
        <PurchaseForm
            nameField={nameField}
            costField={costField}
            selectedTagId={newPurchase.tagId}
            tags={tags}
            onNewTag={() => goToNewTag()}
            onUpdate={(key, value) =>
                dispatch(updatePurchaseEditorAction(key, value))
            }
            onSubmit={() => dispatch(validatePurchaseEditorAction())}
        />
    );
};

export default EditPurchaseScreen;
