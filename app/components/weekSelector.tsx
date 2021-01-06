import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {black, grey} from '../colors';
import IconButton from './iconButton';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {PurchaseStatistic} from '../selectors/stats';
import moment from 'moment';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: 10,
    },
    weekText: {
        textAlign: 'center',
        fontFamily: 'Abel',
        color: black,
        flexGrow: 100,
        fontSize: 22,
        marginTop: 2,
    },
    buttonContainer: {
        width: 30,
    },
});

interface WeekSelectorProps {
    weeklyStats: PurchaseStatistic[][];
    onSelect: (selectedStats: PurchaseStatistic[]) => void;
}
const WeekSelector = (props: WeekSelectorProps) => {
    const [weeksFromToday, setWeeksFromToday] = useState(0);
    const showLeftButton = weeksFromToday < props.weeklyStats.length - 1;
    const showRightButton = weeksFromToday > 0;

    const startDate = moment()
        .startOf('isoWeek')
        .subtract(weeksFromToday, 'weeks')
        .format('DD/MM/YY');

    const endDate = moment()
        .startOf('isoWeek')
        .subtract(weeksFromToday - 1, 'weeks')
        .subtract(1, 'day')
        .format('DD/MM/YY');

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {showLeftButton ? (
                    <IconButton
                        testID={'btn-previous-week'}
                        size={30}
                        color={grey}
                        icon={faChevronLeft}
                        onPress={() => {
                            setWeeksFromToday(weeksFromToday + 1);
                            props.onSelect(
                                props.weeklyStats[weeksFromToday + 1],
                            );
                        }}
                    />
                ) : (
                    undefined
                )}
            </View>

            <Text style={styles.weekText}>
                {startDate} - {endDate}
            </Text>

            <View style={styles.buttonContainer}>
                {showRightButton ? (
                    <IconButton
                        testID={'btn-next-week'}
                        size={30}
                        color={grey}
                        icon={faChevronRight}
                        onPress={() => {
                            setWeeksFromToday(weeksFromToday - 1);
                            props.onSelect(
                                props.weeklyStats[weeksFromToday - 1],
                            );
                        }}
                    />
                ) : (
                    undefined
                )}
            </View>
        </View>
    );
};

export default WeekSelector;
