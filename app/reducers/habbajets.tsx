import {Action} from 'redux';
import {Habbajet} from '../state';
import {ActionType, addHabbajet, AddHabbajetAction} from '../actions';

export default function habbajetsReducer(
    state: Habbajet[] = [],
    action: Action,
): Habbajet[] {
    switch (action.type) {
        case ActionType.ADD_HABBAJET:
            return addHabbajet(state, action as AddHabbajetAction);
    }
    return state;
}
