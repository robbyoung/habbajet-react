import {Action} from 'redux';
import {Habbajet} from '../state';
import {
    ActionType,
    addHabbajet,
    AddHabbajetAction,
    addHabitResult,
    AddHabitResultAction,
} from '../actions';
import { createTestState } from '../state/testState';
export default function habbajetsReducer(
    state: Habbajet[] = createTestState(1, 0, 0).habbajets,
    action: Action,
): Habbajet[] {
    switch (action.type) {
        case ActionType.ADD_HABBAJET:
            return addHabbajet(state, action as AddHabbajetAction);
        case ActionType.ADD_HABIT_RESULT:
            return addHabitResult(state, action as AddHabitResultAction);
    }
    return state;
}
