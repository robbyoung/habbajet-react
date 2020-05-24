import {State} from '../state';

export function getPurchaseNameField(state: State) {
    return state.purchaseEditor.name;
}

export function getPurchaseCostField(state: State) {
    return state.purchaseEditor.cost;
}

export function getValuesForNewPurchase(state: State) {
    const name = state.purchaseEditor.name.value;
    const cost = parseFloat(state.purchaseEditor.cost.value);
    const tagId = state.purchaseEditor.tagId;

    return {
        name,
        cost,
        tagId,
    };
}

export function getValuesForEditedPurchase(state: State) {
    const name = state.purchaseEditor.name.value;
    const cost = parseFloat(state.purchaseEditor.cost.value);
    const tagId = state.purchaseEditor.tagId;
    const id = state.purchaseEditor.id;

    const original = state.purchases.find(
        purchase => purchase.id === state.purchaseEditor.id,
    );
    const difference = original ? cost - original.cost : cost;

    return {
        id: original ? id : undefined,
        name,
        cost,
        tagId,
        difference,
    };
}

export function getValidationStateForNewPurchase(state: State) {
    return (
        state.purchaseEditor.name.errorMessage === '' &&
        state.purchaseEditor.cost.errorMessage === '' &&
        state.purchaseEditor.validated
    );
}
