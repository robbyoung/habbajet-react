import moment from 'moment';
import {State, Tag} from '../state';
import {grey} from '../colors';

export enum TimePeriod {
    ThisWeek = 'This Week',
    PastTwoWeeks = 'Past Two Weeks',
    AllTime = 'All Time',
}

export interface PurchaseStatistic {
    tagName: string;
    total: number;
    percentage: number;
    color: string;
}

function getPurchaseStats(state: State, earliest: number) {
    const tagCosts: {[key: string]: number} = {};
    let totalCost = 0;
    state.purchases
        .filter(purchase => moment(purchase.date).valueOf() > earliest)
        .forEach(purchase => {
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

export function getPurchaseStatsForThisWeek(state: State) {
    const startOfWeek = moment()
        .startOf('isoWeek')
        .valueOf();
    return getPurchaseStats(state, startOfWeek);
}

export function getPurchaseStatsForPastTwoWeeks(state: State) {
    const twoWeeksAgo = moment()
        .startOf('day')
        .subtract(2, 'weeks')
        .valueOf();
    return getPurchaseStats(state, twoWeeksAgo);
}

export function getPurchaseStatsForAllTime(state: State) {
    return getPurchaseStats(state, 0);
}
