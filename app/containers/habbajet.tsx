import React, { useState } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pie from 'react-native-pie';
import { State } from '../state';
import { useSelector } from 'react-redux';
import Label from '../components/label';
import HabitWheel from '../components/habitWheel';
import HabitResultPicker from '../components/habitResultPicker';

const styles = StyleSheet.create({
});

const habbajetSelector = (state: State) => state.habbajets[0];

const Habbajet = () => {
    // const habbajet = useSelector(habbajetSelector);
    const [successes, updateSuccesses] = useState(0);
    const color = '#32a852';

    return (
        <View>
            <HabitWheel
                color={color}
                successes={successes % 7 + 1}
            />
            <Label
                title='Value'
                content={'$100.00'}
                color={color}
            />
            <HabitResultPicker
                dayOfWeek={successes % 7}
                color={color}
                onSuccess={() => updateSuccesses(successes + 1)}
                onFailure={() => undefined}
            />
        </View>
    );
};

export default Habbajet;

