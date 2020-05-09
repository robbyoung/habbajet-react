import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pie from 'react-native-pie';
import {lightGrey, complementColors} from '../colors';
import {HabitResult} from '../state';

const CHART_MARGINS = 30;
const TRANSPARENCY = 'BF';
const styles = StyleSheet.create({
    container: {
        margin: CHART_MARGINS,
        marginBottom: 10,
        marginTop: 10,
    },
});

interface HabitWheelProps {
    results: HabitResult[];
    color: string;
}
const HabitWheel = (props: HabitWheelProps) => {
    const sections: {color: string; percentage: number}[] = [];
    let results = props.results;

    for (let i = 0; i < 7; i++) {
        let color: string;
        switch (results[i]) {
            case HabitResult.Success:
            case HabitResult.SlackSuccess:
                color = props.color + TRANSPARENCY;
                break;
            case HabitResult.Failure:
                color = complementColors[props.color] + TRANSPARENCY;
                break;
            default:
                color = lightGrey;
        }
        sections.push({
            percentage: 100 / 7,
            color: color,
        });
    }

    return (
        <View style={styles.container}>
            <Pie
                radius={
                    (Dimensions.get('window').width - CHART_MARGINS * 2) / 2
                }
                sections={sections}
                strokeCap={'butt'}
                dividerSize={2}
            />
        </View>
    );
};

export default HabitWheel;
