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
    const tagId = '0';

    return {
        name,
        cost,
        tagId,
    };
}

export function getValidationStateForNewPurchase(state: State) {
    return (
        state.purchaseEditor.name.errorMessage === '' &&
        state.purchaseEditor.cost.errorMessage === '' &&
        state.purchaseEditor.validated
    );
}
