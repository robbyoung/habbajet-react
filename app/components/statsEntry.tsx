import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {PurchaseStatistic} from '../selectors/stats';
import {white} from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
    },
    innerContainer: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 5,
        backgroundColor: white,
    },
    title: {
        marginLeft: 10,
        color: white,
        padding: 5,
    },
    text: {
        fontFamily: 'Abel',
        fontSize: 20,
    },
});

interface StatsEntryProps {
    stats: PurchaseStatistic;
}
const StatsEntry = (props: StatsEntryProps) => {
    return (
        <View style={[styles.container, {backgroundColor: props.stats.color}]}>
            <Text style={[styles.text, styles.title]}>
                {props.stats.tagName}
            </Text>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>${props.stats.total.toFixed(2)}</Text>
                <Text style={styles.text}>
                    {(props.stats.percentage * 100).toFixed()}%
                </Text>
            </View>
        </View>
    );
};

export default StatsEntry;
