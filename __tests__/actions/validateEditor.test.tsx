import {validateEditorAction} from '../../app/actions';
import {createTestEditor} from '../../app/state/testState';
import habbajetEditorReducer from '../../app/reducers/habbajetEditor';

function testInvalidSlackField(slack: string) {
    const state = createTestEditor('Valid', '200', '', slack);
    const action = validateEditorAction([]);
    const newState = habbajetEditorReducer(state, action);

    expect(newState.slack.errorMessage).toEqual(
        'Must be an integer between zero and six',
    );
    expect(state).toEqual(createTestEditor('Valid', '200', '', slack));
}

describe('Validate Editor Action', () => {
    it('will pass valid editor values', () => {
        const state = createTestEditor('Valid', '200', '4', '2');

        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState).toEqual(
            createTestEditor('Valid', '200', '4', '2', true),
        );
        expect(state).toEqual(createTestEditor('Valid', '200', '4', '2'));
    });

    it('will reject empty name fields', () => {
        const state = createTestEditor('', '', '');
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(state).toEqual(createTestEditor('', '', ''));
    });

    it('will reject overly long name fields', () => {
        const state = createTestEditor(
            'This name is way too long to be valid',
            '',
            '',
        );
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(state).toEqual(
            createTestEditor('This name is way too long to be valid', '', ''),
        );
    });

    it('will reject duplicate habbajet names', () => {
        const state = createTestEditor('Duplicate', '', '');
        const action = validateEditorAction(['Duplicate']);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual('Used by an existing habit');
        expect(state).toEqual(createTestEditor('Duplicate', '', ''));
    });

    it('will pass valid habbajet descriptions', () => {
        const state = createTestEditor('', '', '');
        state.description.value = 'This is a description';
        const action = validateEditorAction(['']);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.validated).toBe(true);
        expect(newState.description.errorMessage).toEqual('');
    });

    it('will reject massive description values', () => {
        const state = createTestEditor('Test', '', '');
        state.description.value = `
            My friend Goo has a real tattoo
            She always knows just what to do
            She looks through her hair like she doesn't care
            What she does best is stand and stare
            She can play the drums set too
            And the boys say, "hey Goo what's new?"
            My friend Goo just says, "Hey you"
            My friend Goo just says, "Hey you"
            I know a secret or two about Goo
            She won't mind if I tell you
            She likes to wear green underwear
            And lays down most anywhere
            She doesn't have nothing to do
            And the boys say, "hey Goo what's new?"
            My friend Goo goes, "Hey you"
            My friend Goo goes, "Hey you"
            I know a secret or two about Goo
            She won't mind if I tell you
            I know a secret or two about Goo
            I know a secret…`;
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.description.errorMessage).toEqual(
            'Can be at most 300 characters',
        );
        expect(state.description.errorMessage).toEqual('');
    });

    it('will pass empty value, modifier, and slack fields', () => {
        const state = createTestEditor('Valid', '', '', '');
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState).toEqual(createTestEditor('Valid', '', '', '', true));
        expect(state).toEqual(createTestEditor('Valid', '', '', ''));
    });

    it('will fail small values', () => {
        const state = createTestEditor('Valid', '0', '');
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.value.errorMessage).toEqual(
            'Must be a number greater than zero',
        );
        expect(state).toEqual(createTestEditor('Valid', '0', ''));
    });

    it('will fail non-numeric values', () => {
        const state = createTestEditor('Valid', 'nope', '');
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.value.errorMessage).toEqual(
            'Must be a number greater than zero',
        );
        expect(state).toEqual(createTestEditor('Valid', 'nope', ''));
    });

    it('will fail small modifiers', () => {
        const state = createTestEditor('Valid', '200', '1');
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.modifier.errorMessage).toEqual(
            'Must be a number greater than one',
        );
        expect(state).toEqual(createTestEditor('Valid', '200', '1'));
    });

    it('will fail non-numeric modifiers', () => {
        const state = createTestEditor('Valid', '200', 'nope');
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.modifier.errorMessage).toEqual(
            'Must be a number greater than one',
        );
        expect(state).toEqual(createTestEditor('Valid', '200', 'nope'));
    });

    it('will fail non-integer slack days', () => {
        testInvalidSlackField('3.2');
    });

    it('will fail negative slack days', () => {
        testInvalidSlackField('-8');
    });

    it('will fail too-large slack days', () => {
        testInvalidSlackField('7');
    });

    it('can reject multiple problems', () => {
        const state = createTestEditor('', 'nope', 'nope', '1.4');
        const action = validateEditorAction([]);
        const newState = habbajetEditorReducer(state, action);

        expect(newState.name.errorMessage).toEqual(
            'Must be between 1 and 20 characters long',
        );
        expect(newState.value.errorMessage).toEqual(
            'Must be a number greater than zero',
        );
        expect(newState.modifier.errorMessage).toEqual(
            'Must be a number greater than one',
        );
        expect(newState.slack.errorMessage).toEqual(
            'Must be an integer between zero and six',
        );
        expect(state).toEqual(createTestEditor('', 'nope', 'nope', '1.4'));
    });
});
