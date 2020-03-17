import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {State} from '../state';
import Label from '../components/label';
import HabitWheel from '../components/habitWheel';
import HabitResultPicker from '../components/habitResultPicker';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    details: {
        marginLeft: '20%',
    }
});

const habbajetSelector = (state: State) => state.habbajets[0];

const Habbajet = () => {
    // const habbajet = useSelector(habbajetSelector);
    const [successes, updateSuccesses] = useState(0);
    const color = '#32a852';

    return (
        <View style={styles.container}>
            <ScrollView>
                <HabitWheel color={color} successes={(successes % 7) + 1} />
                <View style={styles.details}>
                    <Label title="Value" content={'$100.00'} color={color} contentSize={50}/>
                </View>
            </ScrollView>
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
