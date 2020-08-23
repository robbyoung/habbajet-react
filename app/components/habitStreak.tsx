import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const MAX_WIDTH = Dimensions.get('window').width * 0.6;
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
    },
    barContainer: {
        flexDirection: 'row',
    },
    bar: {
        height: 20,
        marginRight: 5,
    },
    barText: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
        width: 35,
    },
});

interface HabitStreakProps {
    current: number;
    best: number;
    color: string;
}
const HabitStreak = (props: HabitStreakProps) => {
    if (props.best <= 0 || props.current < 0) {
        return <View />;
    }

    const streakWidth = Math.max((props.current / props.best) * MAX_WIDTH, 2);
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: props.color}]}>Streaks</Text>
            <View style={styles.barContainer}>
                <Text style={styles.barText}>Now</Text>
                <View
                    style={[
                        styles.bar,
                        {backgroundColor: props.color, width: streakWidth},
                    ]}
                />
                <Text style={styles.title}>{props.current}</Text>
            </View>
            <View style={styles.barContainer}>
                <Text style={styles.barText}>Best</Text>
                <View
                    style={[
                        styles.bar,
                        {backgroundColor: props.color, width: MAX_WIDTH},
                    ]}
                />
                <Text style={styles.title}>{props.best}</Text>
            </View>
        </View>
    );
};

export default HabitStreak;
