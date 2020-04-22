import {validatePurchaseEditorAction} from '../../app/actions';
import {createTestPurchaseEditor} from '../../app/state/testState';
import purchaseEditorReducer from '../../app/reducers/purchaseEditor';

describe('Validate Purchase Editor Action', () => {
    it('will pass valid purchase editor values', () => {
        const state = createTestPurchaseEditor('Valid', '200');

        const action = validatePurchaseEditorAction();
        const newState = purchaseEditorReducer(state, action);

        expect(newState).toEqual(
            createTestPurchaseEditor('Valid', '200', true),
        );
        expect(state).toEqual(createTestPurchaseEditor('Valid', '200'));
    });

    it('will reject empty name fields', () => {
        const state = createTestPurchaseEditor('', '10');
        const action = validatePurchaseEditorAction();
        const newState = purchaseEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(createTestPurchaseEditor('', '10'));
    });

    it('will reject overly long name fields', () => {
        const state = createTestPurchaseEditor(
            'This name is way too long to be valid',
            '10',
        );
        const action = validatePurchaseEditorAction();
        const newState = purchaseEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(
            createTestPurchaseEditor(
                'This name is way too long to be valid',
                '10',
            ),
        );
    });

    it('will fail too-small costs', () => {
        const state = createTestPurchaseEditor('Valid', '0');
        const action = validatePurchaseEditorAction();
        const newState = purchaseEditorReducer(state, action);

        expect(newState.cost.errorMessage).toEqual(
            'Must be a number greater than zero',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(createTestPurchaseEditor('Valid', '0'));
    });

    it('will fail non-numeric costs', () => {
        const state = createTestPurchaseEditor('Valid', 'nope');
        const action = validatePurchaseEditorAction();
        const newState = purchaseEditorReducer(state, action);

        expect(newState.cost.errorMessage).toEqual(
            'Must be a number greater than zero',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(createTestPurchaseEditor('Valid', 'nope'));
    });

    it('can reject multiple problems at once', () => {
        const state = createTestPurchaseEditor('', 'nope');
        const action = validatePurchaseEditorAction();
        const newState = purchaseEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(newState.cost.errorMessage).toEqual(
            'Must be a number greater than zero',
        );
        expect(newState.validated).toEqual(true);
        expect(state).toEqual(createTestPurchaseEditor('', 'nope'));
    });
});
