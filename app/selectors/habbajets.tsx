import {State} from '../state';

export function getHabbajets(state: State) {
    return state.habbajets;
}

export function getSelectedHabbajet(state: State) {
    return state.habbajets.find(habbajet => habbajet.selected);
}

export function getHabbajetNames(state: State) {
    return state.habbajets.map(habbajet => habbajet.name);
}
