import {State, Tag} from '../state';
import {grey} from '../colors';

export enum TimePeriod {
    ThisWeek = 'This Week',
    AllTime = 'All Time',
}

export interface PurchaseStatistic {
    tagName: string;
    total: number;
    percentage: number;
    color: string;
}

export function getPurchaseStatsForAllTime(state: State) {
    const tagCosts: {[key: string]: number} = {};
    let totalCost = 0;
    state.purchases.forEach(purchase => {
        tagCosts[purchase.tagId] = tagCosts[purchase.tagId]
            ? tagCosts[purchase.tagId] + purchase.cost
            : purchase.cost;
        totalCost = totalCost += purchase.cost;
    });

    let results: PurchaseStatistic[] = [];
    Object.keys(tagCosts).forEach(tagId => {
        const tag: Tag = state.tags.find(t => t.id === tagId) || {
            id: '',
            name: 'Untagged',
            color: grey,
        };
        const total = tagCosts[tagId];
        results.push({
            tagName: tag!.name,
            total,
            percentage: total / totalCost,
            color: tag!.color,
        });
    });

    return results.sort((r1, r2) => r2.total - r1.total);
}
