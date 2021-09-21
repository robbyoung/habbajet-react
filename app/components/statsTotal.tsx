import React from 'react';
import {PurchaseStatistic} from '../selectors/stats';
import {black} from '../colors';
import Label from './label';

interface StatsTotalProps {
    stats: PurchaseStatistic[];
}
const StatsTotal = (props: StatsTotalProps) => {
    var totalValue = props.stats.reduce((sum, stat) => sum + stat.total, 0);
    return (
        <Label
            color={black}
            title="Total"
            content={`$${totalValue.toFixed(2)}`}
            contentSize={50}
        />
    );
};

export default StatsTotal;
