import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
    getPurchaseStatsForAllTime,
    getPurchaseStatsForPastTwoWeeks,
    getPurchaseStatsForThisWeek,
    PurchaseStatistic,
    TimePeriod,
} from '../selectors/stats';
import {white, grey} from '../colors';
import PieChart from '../components/pieChart';
import StatsEntry from '../components/statsEntry';
import Dropdown from '../components/dropdown';
import {State} from '../state';

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
    const [timePeriod, setTimePeriod] = useState<string>(TimePeriod.ThisWeek);

    let statsSelector: (state: State) => PurchaseStatistic[];
    switch (timePeriod) {
        case TimePeriod.ThisWeek:
            statsSelector = getPurchaseStatsForThisWeek;
            break;
        case TimePeriod.PastTwoWeeks:
            statsSelector = getPurchaseStatsForPastTwoWeeks;
            break;
        default:
            statsSelector = getPurchaseStatsForAllTime;
    }

    const stats = useSelector(statsSelector);
    const content =
        stats.length > 0 ? (
            <View>
                <PieChart sections={stats} />
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
                <Dropdown
                    title={'Time Period'}
                    options={[
                        {key: 'This Week', value: TimePeriod.ThisWeek},
                        {key: 'Past Two Weeks', value: TimePeriod.PastTwoWeeks},
                        {key: 'All Time', value: TimePeriod.AllTime},
                    ]}
                    selected={timePeriod}
                    onValueChange={value => setTimePeriod(value)}
                />
                {content}
            </View>
        </ScrollView>
    );
};

export default PurchaseStatsScreen;
