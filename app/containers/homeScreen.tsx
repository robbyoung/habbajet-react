import React from 'react';
import {useSelector} from 'react-redux';
import Label from '../components/label';
import {getBudgetFormatted} from '../selectors';

const HomeScreen = () => {
    const budget = useSelector(getBudgetFormatted);

    return (
        <Label
            title="My Budget"
            content={budget}
            color="#959595"
            contentSize={50}
        />
    );
};

export default HomeScreen;
