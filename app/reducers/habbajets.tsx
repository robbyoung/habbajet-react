import {Action} from 'redux';
import {Habbajet} from '../state';
import {
    ActionType,
    addHabbajet,
    AddHabbajetAction,
    addHabitResult,
    AddHabitResultAction,
    ResetHabbajetAction,
    resetHabbajet,
    LoadStateAction,
    loadHabbajets,
    SelectHabbajetAction,
    selectHabbajet,
    deleteHabbajet,
    DeleteHabbajetAction,
    RewindHabbajetAction,
    rewindHabbajet,
} from '../actions';

export default function habbajetsReducer(
    state: Habbajet[] = [],
    action: Action,
): Habbajet[] {
    switch (action.type) {
        case ActionType.ADD_HABBAJET:
            return addHabbajet(state, action as AddHabbajetAction);
        case ActionType.ADD_HABIT_RESULT:
            return addHabitResult(state, action as AddHabitResultAction);
        case ActionType.RESET_HABBAJET:
            return resetHabbajet(state, action as ResetHabbajetAction);
        case ActionType.SELECT_HABBAJET:
            return selectHabbajet(state, action as SelectHabbajetAction);
        case ActionType.DELETE_HABBAJET:
            return deleteHabbajet(state, action as DeleteHabbajetAction);
        case ActionType.REWIND_HABBAJET:
            return rewindHabbajet(state, action as RewindHabbajetAction);
        case ActionType.LOAD_STATE:
            return loadHabbajets(state, action as LoadStateAction);
    }
    return state;
}
