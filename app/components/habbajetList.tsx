import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Habbajet} from '../state';
import WideButton from './wideButton';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
        color: '#959595',
    },
});

interface HabbajetListProps {
    habbajets: Habbajet[];
    onSelect: (name: string) => void;
}
const HabbajetList = (props: HabbajetListProps) => {
    const buttons = props.habbajets.map(habbajet => (
        <WideButton
            text={habbajet.name}
            color={habbajet.color}
            key={habbajet.name}
            onPress={() => props.onSelect(habbajet.name)}
        />
    ));
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Habits</Text>
            {buttons}
        </View>
    );
};

export default HabbajetList;
