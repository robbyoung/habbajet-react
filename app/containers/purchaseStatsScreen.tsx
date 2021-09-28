import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getWeeklyPurchaseStats} from '../selectors/stats';
import {white, grey} from '../colors';
import PieChart from '../components/pieChart';
import StatsEntry from '../components/statsEntry';
import WeekSelector from '../components/weekSelector';
import StatsTotal from '../components/statsTotal';

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: white,
    },
    container: {
        marginVertical: 10,
        marginHorizontal: '10%',
    },
    empty: {
        width: '100%',
        fontFamily: 'Abel',
        textAlign: 'center',
        fontSize: 20,
        color: grey,
        marginTop: 30,
    },
});

const PurchaseStatsScreen = () => {
    const weeklyStats = useSelector(getWeeklyPurchaseStats);
    const [stats, setStats] = useState(weeklyStats[0]);

    const content =
        stats !== undefined && stats.length > 0 ? (
            <View>
                <PieChart sections={stats} />
                <StatsTotal stats={stats} />
                {stats.map((data, index) => (
                    <StatsEntry stats={data} key={index} />
                ))}
            </View>
        ) : (
            <Text style={styles.empty}>No Stats For This Time Period</Text>
        );

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <WeekSelector
                    weeklyStats={weeklyStats}
                    onSelect={selectedStats => setStats(selectedStats)}
                />
                {content}
            </View>
        </ScrollView>
    );
};

export default PurchaseStatsScreen;
