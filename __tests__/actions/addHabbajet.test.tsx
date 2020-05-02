import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import {addHabbajetAction} from '../../app/actions';
import {Habbajet} from '../../app/state';
import moment from 'moment';
import {white} from '../../app/colors';

describe('Add Habbajet Action', () => {
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

    it('will replace a habbajet with a matching name', () => {
        const state: Habbajet[] = createTestState(3, 0, 0).habbajets;
        const action = addHabbajetAction(state[1].name, 80, 2, 0, white);
        const newState = habbajetsReducer(state, action);

        expect(newState[1]).toEqual(action.newHabbajet);
        expect(state).toEqual(createTestState(3, 0, 0).habbajets);
    });
});
