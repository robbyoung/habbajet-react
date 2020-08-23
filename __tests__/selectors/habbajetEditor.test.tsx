import {createTestState, createTestEditor} from '../../app/state/testState';
import {
    getValuesForNewHabbajet,
    getValidationStateForNewHabbajet,
    getHabbajetEditorFields,
} from '../../app/selectors';
import {habbajetColors} from '../../app/colors';

describe('HabbajetEditor Selectors', () => {
    describe('Get Habbajet Editor Fields', () => {
        it('will return all form field objects on the editor', () => {
            const state = createTestState(0, 0, 0);
            state.habbajetEditor = createTestEditor('Name', '40', '8', '2');
            state.habbajetEditor.description.value = 'Description';

            const result = getHabbajetEditorFields(state);
            expect(result).toEqual({
                name: state.habbajetEditor.name,
                description: state.habbajetEditor.description,
                value: state.habbajetEditor.value,
                modifier: state.habbajetEditor.modifier,
                slack: state.habbajetEditor.slack,
            });
            expect(result.name.value).toBe('Name');
            expect(result.description.value).toBe('Description');
            expect(result.value.value).toBe('40');
            expect(result.modifier.value).toBe('8');
            expect(result.slack.value).toBe('2');
        });
    });

    describe('Get Values For New Habbajet', () => {
        it('will parse and return values from the habbajet editor', () => {
            const state = createTestState(0, 0, 0);
            state.habbajetEditor.name.value = 'Test';
            state.habbajetEditor.value.value = '123';
            state.habbajetEditor.modifier.value = '456';
            state.habbajetEditor.slack.value = '2';

            const result = getValuesForNewHabbajet(state);
            expect(result).toEqual({
                name: 'Test',
                description: '',
                value: 123,
                modifier: 456,
                slack: 2,
                color: habbajetColors[0],
            });
        });

        it('will return invalid number strings as defaults', () => {
            const state = createTestState(0, 0, 0);
            state.habbajetEditor.name.value = 'Test 2';
            state.habbajetEditor.value.value = '';

            const result = getValuesForNewHabbajet(state);
            expect(result).toEqual({
                name: 'Test 2',
                description: '',
                value: 50,
                modifier: 2,
                slack: 0,
                color: habbajetColors[0],
            });
        });
    });

    describe('Get Validation State For New Habbajet', () => {
        it('will return true for validation with no errors', () => {
            const state = createTestState(0, 0, 0);
            state.habbajetEditor.validated = true;

            const result = getValidationStateForNewHabbajet(state);
            expect(result).toEqual(true);
        });

        it('will return false if no validation occurred', () => {
            const state = createTestState(0, 0, 0);

            const result = getValidationStateForNewHabbajet(state);
            expect(result).toEqual(false);
        });

        it('will return false if there are error messages', () => {
            const state = createTestState(0, 0, 0);
            state.habbajetEditor.modifier.errorMessage = 'Invalid';
            state.habbajetEditor.validated = true;

            const result = getValidationStateForNewHabbajet(state);
            expect(result).toEqual(false);
        });

        it('will return false if there is a description error message', () => {
            const state = createTestState(0, 0, 0);
            state.habbajetEditor.description.errorMessage = 'Invalid';
            state.habbajetEditor.validated = true;

            const result = getValidationStateForNewHabbajet(state);
            expect(result).toEqual(false);
        });
    });
});
