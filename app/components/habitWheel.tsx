import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pie from 'react-native-pie';

const CHART_MARGINS = 20;
const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
});

interface HabitWheelProps {
    wedges: boolean[];
    color: string;
}
const HabitWheel = (props: HabitWheelProps) => {
    return (
        <View style={styles.container}>
            <Pie
              radius={(Dimensions.get('window').width - CHART_MARGINS * 2) / 2}
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              strokeCap={'butt'}
            />
        </View>
    );
};

export default HabitWheel;
