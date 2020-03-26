import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {addHabitResultAction} from '../../app/actions';
import moment from 'moment';

describe('Add Habit Result Action', () => {
    it('can update a habbajet with a successful habit outcome', () => {
        const state = createTestState(1, 0, 0).habbajets;
        const action = addHabitResultAction(state[0].name, true);

        const newState = habbajetsReducer(state, action);
        const result = newState[0];
        expect(newState.length).toEqual(state.length);
        expect(result.successes).toEqual(1);

        const date = moment(state[0].date);
        expect(moment(result.date).day()).toEqual(date.day() + 1);
        expect(state).toEqual(createTestState(1, 0, 0).habbajets);
    });

    it('can update a habbajet with an unsuccessful habit outcome', () => {
        const state = createTestState(1, 0, 0).habbajets;
        const action = addHabitResultAction(state[0].name, false);

        const newState = habbajetsReducer(state, action);
        const result = newState[0];
        expect(newState.length).toEqual(state.length);
        expect(result.successes).toEqual(0);

        const date = moment(state[0].date);
        expect(moment(result.date).day()).toEqual(date.day() + 1);
        expect(state).toEqual(createTestState(1, 0, 0).habbajets);
    });

    it('will return state unchanged for invalid habbajet names', () => {
        const state = createTestState(5, 1, 10).habbajets;
        const action = addHabitResultAction('invalid', false);

        const newState = habbajetsReducer(state, action);
        expect([...newState]).toEqual(createTestState(5, 1, 10).habbajets);
        expect(state).toEqual(createTestState(5, 1, 10).habbajets);
    });

    it('will set the toClaim variable at the end of the week', () => {
        const state = createTestState(5, 1, 10).habbajets;
        state[0].date = moment(state[0].date)
            .add(6, 'days')
            .toISOString();
        const action = addHabitResultAction(state[0].name, false);

        const newState = habbajetsReducer(state, action);
        expect(newState[0].toClaim).toEqual(true);
    });
});
