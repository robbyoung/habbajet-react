import {State, Habbajet, Purchase, HabbajetEditor} from '.';
import {habbajetColors} from '../colors';

export function createTestState(
    numHabbajets: number,
    numPurchases: number,
    budget: number,
    selectedIndex: number = -1,
): State {
    const habbajets: Habbajet[] = [];
    for (let i = 0; i < numHabbajets; i++) {
        habbajets.push({
            name: `Habbajet ${i}`,
            maxValue: 100,
            currentValue: 100 / Math.pow(2, 7),
            modifier: 2,
            results: [],
            color: habbajetColors[i % habbajetColors.length],
            date: '2020-03-22T11:00:00.000Z',
            toClaim: false,
            selected: i === selectedIndex,
            currentStreak: 0,
            bestStreak: 5,
        });
    }

    const purchases: Purchase[] = [];
    for (let i = 0; i < numPurchases; i++) {
        purchases.push({
            name: `Purchase ${i}`,
            cost: i,
            date: '2020-03-22T11:00:00.000Z',
        });
    }

    const EMPTY_FIELD = {
        value: '',
        errorMessage: '',
    };
    const habbajetEditor: HabbajetEditor = {
        name: {...EMPTY_FIELD},
        value: {...EMPTY_FIELD},
        modifier: {...EMPTY_FIELD},
        color: habbajetColors[0],
        validated: false,
    };

    return {
        habbajets,
        purchases,
        budget,
        habbajetEditor,
    };
}

export function createTestEditor(
    name: string,
    value: string,
    modifier: string,
    validated = false,
): HabbajetEditor {
    return {
        name: {
            value: name,
            errorMessage: '',
        },
        value: {
            value,
            errorMessage: '',
        },
        modifier: {
            value: modifier,
            errorMessage: '',
        },
        color: habbajetColors[0],
        validated,
    };
}
