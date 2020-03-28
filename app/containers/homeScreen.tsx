import React from 'react';
import {useSelector} from 'react-redux';
import Label from '../components/label';
import {getBudgetFormatted} from '../selectors';
import {View} from 'react-native';

const HomeScreen = () => {
    const budget = useSelector(getBudgetFormatted);

    return (
        <View>
            <Label
                title="My Budget"
                content={budget}
                color="#959595"
                contentSize={50}
            />
        </View>
    );
};

export default HomeScreen;
