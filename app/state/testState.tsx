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
            value: i,
            successes: 0,
            color: '#000',
            date: '2020-03-21T20:44:24.967Z',
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
