import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addPurchaseAction,
    updatePurchaseEditorAction,
    updateBudgetAction,
    clearPurchaseEditorAction,
    validatePurchaseEditorAction,
    setTagToEditAction,
    clearTagEditorAction,
    deletePurchaseAction,
} from '../actions';
import {goBack, goToNewTag, goToEditTag} from '../navigation/navigation';
import {
    getPurchaseNameField,
    getPurchaseCostField,
    getValidationStateForNewPurchase,
    getValuesForEditedPurchase,
} from '../selectors/purchaseEditor';
import {saveState} from '../storage';
import {getAllTags} from '../selectors/tags';
import PurchaseForm from '../components/purchaseForm';
import {
    Navigation,
    OptionsModalPresentationStyle,
} from 'react-native-navigation';

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
            onNewTag={() => {
                dispatch(clearTagEditorAction());
                goToNewTag();
            }}
            onTagEdit={tagId => {
                const tagIndex = tags.findIndex(tag => tag.id === tagId);
                dispatch(setTagToEditAction(tags[tagIndex]));
                goToEditTag();
            }}
            onUpdate={(key, value) =>
                dispatch(updatePurchaseEditorAction(key, value))
            }
            onSubmit={() => dispatch(validatePurchaseEditorAction())}
            onDelete={() =>
                Navigation.showModal({
                    component: {
                        name: 'modal.confirmation',
                        id: 'deleteModal',
                        passProps: {
                            id: 'deleteModal',
                            text:
                                'Are you sure you want to delete this purchase?',
                            onConfirm: () => {
                                goBack();
                                dispatch(updateBudgetAction(edited.cost));
                                dispatch(deletePurchaseAction(edited.id || ''));
                                saveState();
                                Navigation.dismissModal('deleteModal');
                            },
                        },
                        options: {
                            modalPresentationStyle:
                                OptionsModalPresentationStyle.overCurrentContext,
                        },
                    },
                })
            }
        />
    );
};

export default EditPurchaseScreen;
