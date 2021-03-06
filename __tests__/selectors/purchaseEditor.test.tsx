import {createTestState} from '../../app/state/testState';
import {
    getPurchaseNameField,
    getPurchaseCostField,
    getValidationStateForNewPurchase,
    getValuesForNewPurchase,
    getValuesForEditedPurchase,
} from '../../app/selectors';
import {EditorField} from '../../app/state';

describe('PurchaseEditor Selectors', () => {
    describe('Get Purchase Name Field', () => {
        it('will return the name field value and message', () => {
            const state = createTestState(0, 0, 0);
            const expected: EditorField = {
                value: 'Purchase Name',
                errorMessage: 'This is a message',
            };
            state.purchaseEditor.name = expected;

            const result = getPurchaseNameField(state);
            expect(result).toEqual(expected);
        });
    });

    describe('Get Purchase Cost Field', () => {
        it('will return the value field value and message', () => {
            const state = createTestState(0, 0, 0);
            const expected: EditorField = {
                value: '12423',
                errorMessage: 'This is a message',
            };
            state.purchaseEditor.cost = expected;

            const result = getPurchaseCostField(state);
            expect(result).toEqual(expected);
        });
    });

    describe('Get Values For New Purchase', () => {
        it('will parse and return values from the purchase editor', () => {
            const state = createTestState(0, 0, 0);
            state.purchaseEditor.name.value = 'Test';
            state.purchaseEditor.cost.value = '123';
            state.purchaseEditor.tagId = '0';

            const result = getValuesForNewPurchase(state);
            expect(result).toEqual({
                name: 'Test',
                cost: 123,
                tagId: '0',
            });
        });
    });

    describe('Get Values For Edited Purchase', () => {
        it('will parse and return from values and calculate cost difference', () => {
            const state = createTestState(0, 10, 0);
            state.purchaseEditor.name.value = 'Test';
            state.purchaseEditor.cost.value = '10';
            state.purchaseEditor.tagId = '0';
            state.purchaseEditor.id = state.purchases[5].id;

            const result = getValuesForEditedPurchase(state);
            expect(result).toEqual({
                name: 'Test',
                cost: 10,
                tagId: '0',
                id: state.purchases[5].id,
                difference: 5,
            });
        });

        it('will use default values if nothing is being edited', () => {
            const state = createTestState(0, 10, 0);
            state.purchaseEditor.name.value = 'Test';
            state.purchaseEditor.cost.value = '46.82';
            state.purchaseEditor.tagId = '0';
            state.purchaseEditor.id = 'invalid';

            const result = getValuesForEditedPurchase(state);
            expect(result).toEqual({
                name: 'Test',
                cost: 46.82,
                tagId: '0',
                id: undefined,
                difference: 46.82,
            });
        });
    });

    describe('Get Validation State For New Purchase', () => {
        it('will return true for validation with no errors', () => {
            const state = createTestState(0, 0, 0);
            state.purchaseEditor.validated = true;

            const result = getValidationStateForNewPurchase(state);
            expect(result).toEqual(true);
        });

        it('will return false if no validation occurred', () => {
            const state = createTestState(0, 0, 0);

            const result = getValidationStateForNewPurchase(state);
            expect(result).toEqual(false);
        });

        it('will return false if there are error messages', () => {
            const state = createTestState(0, 0, 0);
            state.purchaseEditor.cost.errorMessage = 'Invalid';
            state.purchaseEditor.validated = true;

            const result = getValidationStateForNewPurchase(state);
            expect(result).toEqual(false);
        });
    });
});
