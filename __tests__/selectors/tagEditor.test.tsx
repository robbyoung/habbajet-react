import {createTestState} from '../../app/state/testState';
import {
    getTagNameField,
    getValuesForNewTag,
    getValidationStateForNewTag,
} from '../../app/selectors';
import {EditorField} from '../../app/state';

describe('TagEditor Selectors', () => {
    describe('Get Tag Name Field', () => {
        it('will return the name field value and message', () => {
            const state = createTestState(0, 0, 0);
            const expected: EditorField = {
                value: 'Tag Name',
                errorMessage: 'This is a message',
            };
            state.tagEditor.name = expected;

            const result = getTagNameField(state);
            expect(result).toEqual(expected);
        });
    });

    describe('Get Values For New Tag', () => {
        it('will parse and return values from the tag editor', () => {
            const state = createTestState(0, 0, 0);
            state.tagEditor.name.value = 'Test';
            state.tagEditor.color = '#ffffff';

            const result = getValuesForNewTag(state);
            expect(result).toEqual({
                name: 'Test',
                color: '#ffffff',
            });
        });
    });

    describe('Get Validation State For New Tag', () => {
        it('will return true for validation with no errors', () => {
            const state = createTestState(0, 0, 0);
            state.tagEditor.validated = true;

            const result = getValidationStateForNewTag(state);
            expect(result).toEqual(true);
        });

        it('will return false if no validation occurred', () => {
            const state = createTestState(0, 0, 0);

            const result = getValidationStateForNewTag(state);
            expect(result).toEqual(false);
        });

        it('will return false if there are error messages', () => {
            const state = createTestState(0, 0, 0);
            state.tagEditor.name.errorMessage = 'Invalid';
            state.tagEditor.validated = true;

            const result = getValidationStateForNewTag(state);
            expect(result).toEqual(false);
        });
    });
});
