import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {
    addHabbajetAction,
    addHabitResult,
    addHabitResultAction,
} from '../../app/actions';
import {Habbajet} from '../../app/state';
import moment from 'moment';
import {white, grey} from '../../app/colors';

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
                currentValue: 80,
                maxValue: 80,
                modifier: 2,
                totalSlack: 3,
                remainingSlack: 3,
                color: white,
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
                currentValue: 80,
                modifier: 2,
                totalSlack: 3,
                remainingSlack: 3,
                color: white,
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
                state[1].color,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                name: 'Test Edit',
                maxValue: 80,
                currentValue: 80,
                modifier: 2,
                totalSlack: 3,
                remainingSlack: 1,
                currentStreak: 3,
                results: [1, 1, 0],
            });
            expect(state).toEqual(
                addDays(
                    [false, false, true],
                    createTestState(3, 0, 0, 1).habbajets,
                ),
            );
        });

        it('will retract past slack days if the slack total is decreased', () => {
            let state = createTestState(3, 0, 0, 1).habbajets;
            state[1].totalSlack = 3;
            state[1].remainingSlack = 3;
            state = addDays([false, false, true, true, false, true], state);

            const action = addHabbajetAction(
                state[1].name,
                300,
                5,
                0,
                state[1].color,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                maxValue: 300,
                currentValue: 300 / Math.pow(5, 3),
                modifier: 5,
                totalSlack: 0,
                remainingSlack: 0,
                currentStreak: 1,
                bestStreak: 5,
                results: [2, 2, 0, 0, 2, 0],
            });
        });

        it('will not trigger redo if only name or color change', () => {
            const state: Habbajet[] = addDays(
                [false, false, true],
                createTestState(3, 0, 0, 1).habbajets,
            );

            const action = addHabbajetAction(
                'Test Edit',
                state[1].maxValue,
                state[1].modifier,
                state[1].totalSlack,
                white,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                name: 'Test Edit',
                color: white,
            });
            expect(state).toEqual(
                addDays(
                    [false, false, true],
                    createTestState(3, 0, 0, 1).habbajets,
                ),
            );
        });

        it('can rework week with new modifier', () => {
            const state: Habbajet[] = addDays(
                [true, false, true],
                createTestState(3, 0, 0, 1).habbajets,
            );

            const action = addHabbajetAction(
                'Test Edit',
                state[1].maxValue,
                4,
                state[1].totalSlack,
                white,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                name: 'Test Edit',
                modifier: 4,
                currentValue: 25,
                color: white,
            });
            expect(state).toEqual(
                addDays(
                    [true, false, true],
                    createTestState(3, 0, 0, 1).habbajets,
                ),
            );
        });

        it('will preserve history and rework streaks', () => {
            const state: Habbajet[] = addDays(
                [true, false],
                createTestState(3, 0, 0, 1).habbajets,
            );
            state[1].results = [0, 0, 0, 0, 0, 0, 0, 0, 2];
            state[1].oldStreaks = [7, 7];
            state[1].bestStreak = 7;

            const action = addHabbajetAction(
                'Test Edit',
                200,
                3,
                1,
                white,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                name: 'Test Edit',
                maxValue: 200,
                currentValue: 200,
                modifier: 3,
                totalSlack: 1,
                remainingSlack: 0,
                color: white,
                bestStreak: 9,
                currentStreak: 9,
                results: [0, 0, 0, 0, 0, 0, 0, 0, 1],
            });
        });

        it('can rework weeks about to be claimed', () => {
            const state: Habbajet[] = addDays(
                [true, true, false, true, false, true, true],
                createTestState(3, 0, 0, 1).habbajets,
            );

            const action = addHabbajetAction(
                state[1].name,
                80,
                4,
                1,
                grey,
                state[1].id,
            );
            const newState = habbajetsReducer(state, action);

            expect(newState[1]).toEqual({
                ...state[1],
                maxValue: 80,
                currentValue: 80 / Math.pow(4, 1),
                modifier: 4,
                totalSlack: 1,
                remainingSlack: 0,
                color: grey,
                currentStreak: 2,
                toClaim: true,
                results: [0, 0, 1, 0, 2, 0, 0],
            });
            expect(state).toEqual(
                addDays(
                    [true, true, false, true, false, true, true],
                    createTestState(3, 0, 0, 1).habbajets,
                ),
            );
        });
    });
});
