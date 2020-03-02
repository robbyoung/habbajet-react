import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pie from 'react-native-pie';

const CHART_MARGINS = 20;
const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
});

const transparencies = [
    '00',
    '21',
    '42',
    '63',
    '85',
    'A6',
    'C7',
    'E8',
];

interface HabitWheelProps {
    wedges: boolean[];
    color: string;
}
const HabitWheel = (props: HabitWheelProps) => {
    let successes = 0;
    const sections = props.wedges.map(wedge => {
        if (wedge) {
            successes++;
        }

        return {
            percentage: 14.3,
            color: props.color + transparencies[successes],
        };
    });

    return (
        <View style={styles.container}>
            <Pie
              radius={(Dimensions.get('window').width - CHART_MARGINS * 2) / 2}
              sections={sections}
              strokeCap={'butt'}
              dividerSize={1}
            />
        </View>
    );
};

export default HabitWheel;
