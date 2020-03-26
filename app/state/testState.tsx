import {State, Habbajet, Purchase} from '.';

export function createTestState(
    numHabbajets: number,
    numPurchases: number,
    budget: number,
): State {
    const habbajets: Habbajet[] = [];
    for (let i = 0; i < numHabbajets; i++) {
        habbajets.push({
            name: `Habbajet ${i}`,
            maxValue: 100,
            currentValue: 100 / Math.pow(2, 7),
            factor: 2,
            successes: 0,
            color: '#8066C2',
            date: '2020-03-22T11:00:00.000Z',
            toClaim: false,
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
