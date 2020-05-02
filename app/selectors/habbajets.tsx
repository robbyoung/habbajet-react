import {State} from '../state';

export function getHabbajets(state: State) {
    return state.habbajets;
}

export function getSelectedHabbajet(state: State) {
    let habbajet = state.habbajets.find(h => h.selected);
    if (habbajet !== undefined && state.budget < 0) {
        habbajet = {...habbajet, currentValue: habbajet.currentValue * 0.9};
    }
    return habbajet;
}

export function getHabbajetNames(state: State) {
    return state.habbajets.map(habbajet => habbajet.name);
}

export function getUnselectedHabbajetNames(state: State) {
    return state.habbajets
        .filter(habbajet => !habbajet.selected)
        .map(habbajet => habbajet.name);
}
