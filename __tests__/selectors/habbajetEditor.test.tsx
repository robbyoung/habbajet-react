import {createTestState} from '../../app/state/testState';
import {getEditorNameField, getEditorValueField} from '../../app/selectors';
import {EditorField} from '../../app/state';

describe('HabbaajetEditor Selectors', () => {
    describe('Get Editor Name Field', () => {
        it('will return the name field value and message', () => {
            const state = createTestState(0, 0, 0);
            const expected: EditorField = {
                value: 'Habbajet Name',
                errorMessage: 'This is a message',
            };
            state.habbajetEditor.name = expected;

            const result = getEditorNameField(state);
            expect(result).toEqual(expected);
        });
    });

    describe('Get Editor Value Field', () => {
        it('will return the value field value and message', () => {
            const state = createTestState(0, 0, 0);
            const expected: EditorField = {
                value: '12423',
                errorMessage: 'This is a message',
            };
            state.habbajetEditor.value = expected;

            const result = getEditorValueField(state);
            expect(result).toEqual(expected);
        });
    });
});
