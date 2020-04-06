import {State, Habbajet, Purchase, HabbajetEditor} from '.';
import {habbajetColors} from '../colors';
import {DEFAULT_EDITOR_STATE} from '../reducers/habbajetEditor';

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
            factor: 2,
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
            value: i,
        });
    }

    const habbajetEditor: HabbajetEditor = DEFAULT_EDITOR_STATE;

    return {
        habbajets,
        purchases,
        budget,
        habbajetEditor,
    };
}
