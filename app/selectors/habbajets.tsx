import moment from 'moment';
import {State, Habbajet} from '../state';

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

export function checkHabbajetEquality(
    left: Habbajet | undefined,
    right: Habbajet | undefined,
) {
    if (left === undefined || right === undefined) {
        return false;
    }

    return (
        left.results.length === right.results.length &&
        left.name === right.name &&
        left.description === right.description &&
        left.maxValue === right.maxValue &&
        left.modifier === right.modifier &&
        left.totalSlack === right.totalSlack &&
        left.color === right.color
    );
}

function getWeekday(index: number) {
    return moment()
        .weekday(index + 1)
        .format('dddd');
}

export function getHabbajetDangerDays(state: State) {
    const habbajet = state.habbajets.find(h => h.selected);
    let lowIndex = 0;
    let highIndex = 0;

    if (!habbajet || !habbajet.dangerDays) {
        return undefined;
    }

    habbajet.dangerDays.forEach((failures, index) => {
        if (failures > habbajet.dangerDays[highIndex]) {
            highIndex = index;
        } else if (failures < habbajet.dangerDays[lowIndex]) {
            lowIndex = index;
        }
    });

    const noData = habbajet.dangerDays[highIndex] === 0;
    const bestDay = noData ? 'N/A' : getWeekday(lowIndex);
    const worstDay = noData ? 'N/A' : getWeekday(highIndex);

    return {
        bestDay,
        worstDay,
        color: habbajet.color,
    };
}
