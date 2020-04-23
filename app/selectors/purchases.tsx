import {State} from '../state';
import moment from 'moment';

export interface FormattedPurchase {
    name: string;
    cost: string;
    date: string;
    tagText: string;
    tagColor: string;
}

const DATE_FORMAT = 'DD/MM/YYYY';

export function getPurchaseListFormatted(state: State): FormattedPurchase[] {
    const tags = state.tags;
    return state.purchases.map(purchase => {
        const cost = `$${purchase.cost.toFixed(2)}`;
        const date = moment(purchase.date).format(DATE_FORMAT);
        const tag = tags.find(t => purchase.tagId === t.id);

        return {
            name: purchase.name,
            cost,
            date,
            tagText: tag ? tag.name : '',
            tagColor: tag ? tag.color : '',
        };
    });
}
