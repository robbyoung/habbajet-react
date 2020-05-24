import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Habbajet} from '../state';
import Label from './label';
import HabitWheel from './habitWheel';
import HabitResultPicker from './habitResultPicker';
import HabbajetClaimer from './habbajetClaimer';
import {white} from '../colors';
import HabitStreak from './habitStreak';
import SlackDays from './slackDays';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: white,
        marginBottom: 10,
    },
    details: {
        marginLeft: '20%',
    },
});

interface HabbajetDisplayProps {
    habbajet: Habbajet;
    hasDeficit: boolean;
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
                    results={props.habbajet.results}
                />
                <View style={styles.details}>
                    <Label
                        title={
                            props.hasDeficit
                                ? 'Expected Output (-10%)'
                                : 'Expected Output'
                        }
                        content={`$${props.habbajet.currentValue.toFixed(2)}`}
                        color={props.habbajet.color}
                        contentSize={50}
                    />
                    <HabitStreak
                        best={props.habbajet.bestStreak}
                        current={props.habbajet.currentStreak}
                        color={props.habbajet.color}
                    />
                    <SlackDays
                        total={props.habbajet.totalSlack}
                        remaining={props.habbajet.remainingSlack}
                        color={props.habbajet.color}
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
