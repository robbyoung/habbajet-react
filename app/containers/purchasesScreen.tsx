import React from 'react';
import {StyleSheet, View} from 'react-native';
import {white} from '../colors';

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: white,
    },
});

const PurchasesScreen = () => {
    return <View style={styles.background} />;
};

export default PurchasesScreen;
