import {State} from '../state';
import moment from 'moment';

export interface FormattedPurchase {
    name: string;
    cost: string;
    date: string;
}

const DATE_FORMAT = 'DD/MM/YYYY';

export function getPurchaseListFormatted(state: State): FormattedPurchase[] {
    return state.purchases.map(purchase => {
        const cost = `$${purchase.cost.toFixed(2)}`;
        const date = moment(purchase.date).format(DATE_FORMAT);

        return {
            name: purchase.name,
            cost,
            date,
        };
    });
}
