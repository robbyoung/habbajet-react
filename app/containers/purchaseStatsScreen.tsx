import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getPurchaseStatsForAllTime} from '../selectors/stats';
import {white} from '../colors';
import PieChart from '../components/pieChart';
import StatsEntry from '../components/statsEntry';

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: white,
    },
    container: {
        marginVertical: 10,
        marginHorizontal: '10%',
    },
});

const PurchaseStatsScreen = () => {
    const stats = useSelector(getPurchaseStatsForAllTime);

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <PieChart sections={stats} />

                {stats.map((data, index) => (
                    <StatsEntry stats={data} key={index} />
                ))}
            </View>
        </ScrollView>
    );
};

export default PurchaseStatsScreen;
