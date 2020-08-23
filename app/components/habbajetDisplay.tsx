import React from 'react';
import moment from 'moment';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Habbajet} from '../state';
import Label from './label';
import HabitWheel from './habitWheel';
import HabitResultPicker from './habitResultPicker';
import HabbajetClaimer from './habbajetClaimer';
import {white} from '../colors';
import HabitStreak from './habitStreak';
import SlackDays from './slackDays';
import WideButton from './wideButton';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: white,
    },
    details: {
        marginHorizontal: '10%',
        marginBottom: 15,
    },
    resetButton: {
        marginTop: 10,
    },
});

interface HabbajetDisplayProps {
    habbajet: Habbajet;
    hasDeficit: boolean;
    onSuccess: () => void;
    onFailure: () => void;
    onClaim: () => void;
    onReset: () => void;
}
const HabbajetDisplay = (props: HabbajetDisplayProps) => {
    const canReset =
        props.habbajet.toClaim || moment(props.habbajet.date).day() !== 1;
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
                    {props.habbajet.description ? (
                        <Label
                            title="Description"
                            content={props.habbajet.description}
                            color={props.habbajet.color}
                            contentSize={20}
                        />
                    ) : (
                        undefined
                    )}
                    {canReset ? (
                        <View style={styles.resetButton}>
                            <WideButton
                                text="Reset Week"
                                color={props.habbajet.color}
                                testID={'button-reset'}
                                onPress={() => props.onReset()}
                            />
                        </View>
                    ) : (
                        undefined
                    )}
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
