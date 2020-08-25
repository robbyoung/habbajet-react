import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getPurchaseStatsForAllTime} from '../selectors/stats';

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: '10%',
    },
});

const PurchaseStatsScreen = () => {
    const stats = useSelector(getPurchaseStatsForAllTime);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>{JSON.stringify(stats)}</Text>
            </View>
        </ScrollView>
    );
};

export default PurchaseStatsScreen;
