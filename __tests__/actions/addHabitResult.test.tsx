import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {addHabitResultAction} from '../../app/actions';
import moment from 'moment';
import {HabitResult} from '../../app/state';

describe('Add Habit Result Action', () => {
    it('can update a habbajet with a successful habit outcome', () => {
        const state = createTestState(1, 0, 0).habbajets;
        const action = addHabitResultAction(state[0].name, true);

        const newState = habbajetsReducer(state, action);
        const result = newState[0];
        expect(newState.length).toEqual(state.length);
        expect(result.results).toEqual([HabitResult.Success]);
        expect(result.currentValue).toEqual(state[0].currentValue);
        expect(result.currentStreak).toEqual(state[0].currentStreak + 1);
        expect(result.bestStreak).toEqual(state[0].bestStreak);

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
        expect(result.results).toEqual([HabitResult.Failure]);
        expect(result.currentValue).toEqual(state[0].currentValue / 2);

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
        state[0].results = [0, 0, 0, 0, 0, 0];
        const action = addHabitResultAction(state[0].name, false);

        const newState = habbajetsReducer(state, action);
        expect(newState[0].toClaim).toEqual(true);
        expect(newState[0].results[6]).toEqual(HabitResult.Failure);
    });

    it('will reset habit streak on an unsuccessful habit outcome', () => {
        const state = createTestState(1, 0, 0).habbajets;
        state[0].currentStreak = 5;

        const action = addHabitResultAction(state[0].name, false);
        const newState = habbajetsReducer(state, action);
        expect(newState[0].bestStreak).toEqual(5);
        expect(newState[0].currentStreak).toEqual(0);
    });

    it('will keep the best streak up to date', () => {
        const state = createTestState(1, 0, 0).habbajets;
        state[0].currentStreak = state[0].bestStreak;

        const action = addHabitResultAction(state[0].name, true);
        const newState = habbajetsReducer(state, action);
        expect(newState[0].bestStreak).toEqual(newState[0].currentStreak);
        expect(newState[0].currentStreak).toEqual(state[0].currentStreak + 1);
    });

    it('will count slack days toward successes', () => {
        const state = createTestState(1, 0, 0).habbajets;
        state[0].remainingSlack = 1;
        state[0].totalSlack = 1;

        const action = addHabitResultAction(state[0].name, false);
        const newState = habbajetsReducer(state, action);
        expect(newState[0].results[0]).toEqual(HabitResult.SlackSuccess);
        expect(newState[0].currentStreak).toEqual(1);
        expect(newState[0].remainingSlack).toEqual(0);
        expect(newState[0].totalSlack).toEqual(1);
    });

    it('will fail days that have run out of slack days', () => {
        const state = createTestState(1, 0, 0).habbajets;
        state[0].remainingSlack = 0;
        state[0].totalSlack = 1;

        const action = addHabitResultAction(state[0].name, false);
        const newState = habbajetsReducer(state, action);
        expect(newState[0].results[0]).toEqual(HabitResult.Failure);
        expect(newState[0].currentStreak).toEqual(0);
    });

    it('will update danger day values correctly', () => {
        const state = createTestState(1, 0, 0).habbajets;
        let newState = state;

        for (let day = 0; day < 7; day++) {
            const action = addHabitResultAction(newState[0].name, false);
            newState = habbajetsReducer(newState, action);

            expect(newState[0].dangerDays[day]).toEqual(1);
        }
        expect(state).toEqual(createTestState(1, 0, 0).habbajets);
    });
});
