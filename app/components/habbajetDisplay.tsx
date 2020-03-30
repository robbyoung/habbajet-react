import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Habbajet} from '../state';
import Label from './label';
import HabitWheel from './habitWheel';
import HabitResultPicker from './habitResultPicker';
import HabbajetClaimer from './habbajetClaimer';
import {white} from '../colors';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: white,
    },
    details: {
        marginLeft: '20%',
    },
});

interface HabbajetDisplayProps {
    habbajet: Habbajet;
    onSuccess: () => void;
    onFailure: () => void;
    onClaim: () => void;
}
const HabbajetDisplay = (props: HabbajetDisplayProps) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <HabitWheel
                    color={props.habbajet.color}
                    successes={props.habbajet.results.length}
                />
                <View style={styles.details}>
                    <Label
                        title="Current Value"
                        content={`$${props.habbajet.currentValue.toFixed(2)}`}
                        color={props.habbajet.color}
                        contentSize={50}
                    />
                </View>
            </ScrollView>
            <HabitResultPicker
                habbajet={props.habbajet}
                onSuccess={() => props.onSuccess()}
                onFailure={() => props.onFailure()}
            />
            <HabbajetClaimer
                habbajet={props.habbajet}
                onClaim={() => props.onClaim()}
            />
        </View>
    );
};

export default HabbajetDisplay;
