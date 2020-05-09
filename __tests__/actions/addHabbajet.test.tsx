import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {
    addHabbajetAction,
    addHabitResult,
    addHabitResultAction,
} from '../../app/actions';
import {Habbajet} from '../../app/state';
import moment from 'moment';
import {white} from '../../app/colors';

describe('Add Habbajet Action', () => {
    describe('Add new habbajet', () => {
        it('can add a habbajet to the empty state', () => {
            const action = addHabbajetAction('Test Habbajet', 80, 2, 1, white);
            const state: Habbajet[] = [];
            const newState = habbajetsReducer(state, action);
            expect(newState).toEqual([action.newHabbajet]);
            expect(newState[0].name).toBe('Test Habbajet');
            expect(newState[0].maxValue).toBe(80);
            expect(newState[0].remainingSlack).toBe(1);
            expect(newState[0].totalSlack).toBe(1);
            expect(state).toEqual([]);
        });

        it('will add habbajets to the end of the list', () => {
            const action = addHabbajetAction('Test Habbajet', 80, 2, 0, white);
            const state = createTestState(10, 1, 20).habbajets;
            const newState = habbajetsReducer(state, action);
            expect(newState).toEqual([
                ...createTestState(10, 1, 20).habbajets,
                action.newHabbajet,
            ]);
            expect(state).toEqual(createTestState(10, 1, 20).habbajets);
        });

        it('will set the date to a timestamp of the most recent Monday', () => {
            const action = addHabbajetAction('Test Habbajet', 80, 2, 0, white);
            const state: Habbajet[] = [];
            const newState = habbajetsReducer(state, action);
            const date = moment(newState[0].date);
            expect(date.format('ddmmyyyy')).toEqual(
                moment()
                    .startOf('isoWeek')
                    .format('ddmmyyyy'),
            );
            expect(date.day()).toEqual(1);
            expect(state).toEqual([]);
        });

        it('will set the streak values to zero', () => {
            const action = addHabbajetAction('Test Habbajet', 80, 2, 0, white);
            const state: Habbajet[] = [];
            const newState = habbajetsReducer(state, action);

            expect(newState[0].currentStreak).toEqual(0);
            expect(newState[0].bestStreak).toEqual(0);
            expect(state).toEqual([]);
        });
    });

    describe('Edit habbajet', () => {
        function addDays(daysToRedo: boolean[], state: Habbajet[]) {
            for (let day of daysToRedo) {
                state = addHabitResult(
                    state,
                    addHabitResultAction(state[1].name, day),
                );
            }
            return state;
        }

        it('will replace a habbajet with a matching id', () => {
            const state: Habbajet[] = createTestState(3, 0, 0, 1).habbajets;
            const action = addHabbajetAction(
                'Test Edit',
                80,
                2,
                3,
                white,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                name: 'Test Edit',
                currentValue: 80 / Math.pow(2, 7),
                maxValue: 80,
                modifier: 2,
                totalSlack: 3,
                remainingSlack: 3,
                color: white,
                bestStreak: 5,
            });
            expect(state).toEqual(createTestState(3, 0, 0, 1).habbajets);
        });

        it('will rework a partially completed week', () => {
            const state: Habbajet[] = addDays(
                [true, true],
                createTestState(3, 0, 0, 1).habbajets,
            );

            const action = addHabbajetAction(
                'Test Edit',
                80,
                2,
                3,
                white,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                name: 'Test Edit',
                maxValue: 80,
                currentValue: 80 / Math.pow(2, 5),
                modifier: 2,
                totalSlack: 3,
                remainingSlack: 3,
                color: white,
                bestStreak: 5,
            });
            expect(state).toEqual(
                addDays([true, true], createTestState(3, 0, 0, 1).habbajets),
            );
        });

        it('will include slack in the redo calculation', () => {
            const state: Habbajet[] = addDays(
                [false, false, true],
                createTestState(3, 0, 0, 1).habbajets,
            );

            const action = addHabbajetAction(
                'Test Edit',
                80,
                2,
                3,
                white,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                name: 'Test Edit',
                maxValue: 80,
                currentValue: 80 / Math.pow(2, 4),
                modifier: 2,
                totalSlack: 3,
                remainingSlack: 1,
                color: white,
                bestStreak: 5,
                currentStreak: 3,
            });
            expect(state).toEqual(
                addDays(
                    [false, false, true],
                    createTestState(3, 0, 0, 1).habbajets,
                ),
            );
        });
    });
});
