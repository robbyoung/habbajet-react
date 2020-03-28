import {State, Habbajet, Purchase} from '.';

const colors = [
    '#8066C2',
    '#2AAD5E',
    '#E04747',
    '#7F90EC',
    '#B1B952',
    '#000000',
];

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
            successes: 0,
            color: colors[i % colors.length],
            date: '2020-03-22T11:00:00.000Z',
            toClaim: false,
            selected: i === selectedIndex,
        });
    }

    const purchases: Purchase[] = [];
    for (let i = 0; i < numPurchases; i++) {
        purchases.push({
            name: `Purchase ${i}`,
            value: i,
        });
    }

    return {
        habbajets,
        purchases,
        budget,
    };
}
