import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: '10%',
    },
});

const PurchaseStatsScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Todo</Text>
            </View>
        </ScrollView>
    );
};

export default PurchaseStatsScreen;
