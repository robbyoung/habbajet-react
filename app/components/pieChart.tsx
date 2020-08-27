import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pie from 'react-native-pie';
import {PurchaseStatistic} from '../selectors/stats';

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
});

interface PieChartProps {
    sections: PurchaseStatistic[];
}
const PieChart = (props: PieChartProps) => {
    return (
        <View style={styles.container}>
            <Pie
                radius={(Dimensions.get('window').width * 0.8) / 2}
                sections={props.sections.map(section => ({
                    percentage: section.percentage * 100,
                    color: section.color,
                }))}
                strokeCap={'butt'}
            />
        </View>
    );
};

export default PieChart;
