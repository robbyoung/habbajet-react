import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {complementColors} from '../colors';

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
    cirlceContainer: {
        flexDirection: 'row',
    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 5,
    },
});

interface SlackDaysProps {
    total: number;
    remaining: number;
    color: string;
}
const SlackDays = (props: SlackDaysProps) => {
    if (props.total <= 0) {
        return <View />;
    }

    const circles: JSX.Element[] = [];
    for (let i = 0; i < props.total; i++) {
        const color =
            i < props.remaining ? props.color : complementColors[props.color];
        circles.push(
            <View style={[styles.circle, {backgroundColor: color}]} key={i} />,
        );
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: props.color}]}>Slack Days</Text>
            <View style={styles.cirlceContainer}>{circles}</View>
        </View>
    );
};

export default SlackDays;
