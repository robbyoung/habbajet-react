import {State, Purchase} from '../state';
import moment from 'moment';

export interface FormattedPurchase {
    name: string;
    cost: string;
    date: string;
    tagText: string;
    tagColor: string;
    unformatted: Purchase;
}

const DATE_FORMAT = 'DD/MM/YYYY';
const MAX_PURCHASES = 50;

export function getPurchaseListFormatted(state: State): FormattedPurchase[] {
    const tags = state.tags;
    return state.purchases.slice(0, MAX_PURCHASES).map(purchase => {
        const cost = `$${purchase.cost.toFixed(2)}`;
        const date = moment(purchase.date).format(DATE_FORMAT);
        const tag = tags.find(t => purchase.tagId === t.id);

        return {
            name: purchase.name,
            cost,
            date,
            tagText: tag ? tag.name : '',
            tagColor: tag ? tag.color : '',
            unformatted: purchase,
        };
    });
}
