import {setHabbajetToEditAction} from '../../app/actions';
import {createTestState} from '../../app/state/testState';
import habbajetEditorReducer from '../../app/reducers/habbajetEditor';

describe('Set Habbajet To Edit Action', () => {
    it('will reset the editor to its default state', () => {
        const state = createTestState(1, 0, 0);
        const action = setHabbajetToEditAction(state.habbajets[0]);
        const newState = habbajetEditorReducer(state.habbajetEditor, action);

        expect(newState).toEqual({
            name: {
                value: state.habbajets[0].name,
                errorMessage: '',
            },
            value: {
                value: `${state.habbajets[0].maxValue}`,
                errorMessage: '',
            },
            modifier: {
                value: `${state.habbajets[0].modifier}`,
                errorMessage: '',
            },
            slack: {
                value: `${state.habbajets[0].totalSlack}`,
                errorMessage: '',
            },
            color: state.habbajets[0].color,
            validated: false,
        });
        expect(state.habbajetEditor).toEqual(
            createTestState(1, 0, 0).habbajetEditor,
        );
    });
});
