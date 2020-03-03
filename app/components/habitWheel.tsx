import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pie from 'react-native-pie';

const CHART_MARGINS = 20;
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});

const transparencies = ['21', '42', '63', '85', 'A6', 'C7', 'E8'];

interface HabitWheelProps {
    successes: number;
    color: string;
}
const HabitWheel = (props: HabitWheelProps) => {
    let successes = props.successes;
    if (props.successes < 0 || props.successes > 7) {
        successes = 0;
    }

    const sections: {color: string; percentage: number}[] = [];
    for (let s = 0; s < successes; s++) {
        sections.push({
            percentage: 14.3,
            color: props.color + transparencies[s],
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
                backgroundColor={'#f5f5f5'}
            />
        </View>
    );
};

export default HabitWheel;
