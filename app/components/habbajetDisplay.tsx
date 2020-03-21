import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Habbajet} from '../state';
import Label from './label';
import HabitWheel from './habitWheel';
import HabitResultPicker from './habitResultPicker';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    details: {
        marginLeft: '20%',
    },
});

interface HabbajetDisplayProps {
    habbajet: Habbajet;
    day: number;
    onSuccess: () => void;
    onFailure: () => void;
}
const HabbajetDisplay = (props: HabbajetDisplayProps) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <HabitWheel
                    color={props.habbajet.color}
                    successes={props.habbajet.successes}
                />
                <View style={styles.details}>
                    <Label
                        title="Value"
                        content={'$100.00'}
                        color={props.habbajet.color}
                        contentSize={50}
                    />
                </View>
            </ScrollView>
            <HabitResultPicker
                dayOfWeek={props.day}
                color={props.habbajet.color}
                onSuccess={() => props.onSuccess()}
                onFailure={() => props.onFailure()}
            />
        </View>
    );
};

export default HabbajetDisplay;
