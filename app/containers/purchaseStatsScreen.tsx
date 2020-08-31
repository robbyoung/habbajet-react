import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getPurchaseStatsForAllTime, TimePeriod} from '../selectors/stats';
import {white, grey} from '../colors';
import PieChart from '../components/pieChart';
import StatsEntry from '../components/statsEntry';
import Dropdown from '../components/dropdown';

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
        fontSize: 30,
        color: grey,
        marginTop: 50,
    },
});

const PurchaseStatsScreen = () => {
    const stats = useSelector(getPurchaseStatsForAllTime);
    const [timePeriod, setTimePeriod] = useState(TimePeriod.ThisWeek);

    if (stats.length === 0) {
        return <Text style={styles.empty}>No Stats Yet</Text>;
    }

    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <Dropdown
                    title={'Time Period'}
                    options={[
                        {key: 'This Week', value: TimePeriod.ThisWeek},
                        {key: 'All Time', value: TimePeriod.AllTime},
                    ]}
                    selected={timePeriod}
                    onValueChange={value => setTimePeriod(value)}
                />
                <PieChart sections={stats} />
                {stats.map((data, index) => (
                    <StatsEntry stats={data} key={index} />
                ))}
            </View>
        </ScrollView>
    );
};

export default PurchaseStatsScreen;
