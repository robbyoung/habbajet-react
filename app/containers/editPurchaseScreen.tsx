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
    getValidationStateForNewPurchase,
    getValuesForEditedPurchase,
} from '../selectors/purchaseEditor';
import {saveState} from '../storage';
import {getAllTags} from '../selectors/tags';
import PurchaseForm from '../components/purchaseForm';

const EditPurchaseScreen = () => {
    const dispatch = useDispatch();
    const nameField = useSelector(getPurchaseNameField);
    const costField = useSelector(getPurchaseCostField);
    const tags = useSelector(getAllTags);
    const edited = useSelector(getValuesForEditedPurchase);
    const isValid = useSelector(getValidationStateForNewPurchase);

    if (isValid) {
        dispatch(clearPurchaseEditorAction());
        dispatch(
            addPurchaseAction(
                edited.name,
                edited.cost,
                edited.tagId,
                edited.id,
            ),
        );
        dispatch(updateBudgetAction(-edited.difference));
        goBack();
        saveState();
    }

    return (
        <PurchaseForm
            nameField={nameField}
            costField={costField}
            selectedTagId={edited.tagId}
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
