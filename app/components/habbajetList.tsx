import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Habbajet} from '../state';
import WideButton from './wideButton';
import {grey} from '../colors';
import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
        color: grey,
    },
});

interface HabbajetListProps {
    habbajets: Habbajet[];
    onSelect: (habbajet: Habbajet) => void;
}
const HabbajetList = (props: HabbajetListProps) => {
    const today = moment().valueOf();
    const buttons = props.habbajets.map(habbajet => (
        <WideButton
            text={habbajet.name}
            color={habbajet.color}
            highlight={
                today > moment(habbajet.date).valueOf() || habbajet.toClaim
            }
            key={habbajet.name}
            onPress={() => props.onSelect(habbajet)}
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
