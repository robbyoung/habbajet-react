import {loadStateAction} from '../../app/actions';
import {Habbajet, Purchase, Tag} from '../../app/state';
import habbajetsReducer from '../../app/reducers/habbajets';
import {createTestState} from '../../app/state/testState';
import budgetReducer from '../../app/reducers/budget';
import purchasesReducer from '../../app/reducers/purchases';
import tagReducer from '../../app/reducers/tags';

describe('Load State Action', () => {
    it('can load habbajets', () => {
        const toLoad = createTestState(20, 5, 100);
        const state: Habbajet[] = [];
        const action = loadStateAction(toLoad);
        const newState = habbajetsReducer(state, action);

        expect(newState).toEqual(toLoad.habbajets);
        expect(state).toEqual(state);
    });

    it('can load purchases', () => {
        const toLoad = createTestState(20, 5, 100);
        const state: Purchase[] = [];
        const action = loadStateAction(toLoad);
        const newState = purchasesReducer(state, action);

        expect(newState).toEqual(toLoad.purchases);
        expect(state).toEqual(state);
    });

    it('can load budget', () => {
        const toLoad = createTestState(20, 5, 100);
        const state = 0;
        const action = loadStateAction(toLoad);
        const newState = budgetReducer(state, action);

        expect(newState).toEqual(toLoad.budget);
        expect(state).toEqual(state);
    });

    it('can load tags', () => {
        const toLoad = createTestState(20, 5, 100);
        const state: Tag[] = [];
        const action = loadStateAction(toLoad);
        const newState = tagReducer(state, action);

        expect(newState).toEqual(toLoad.tags);
        expect(state).toEqual(state);
    });
});
