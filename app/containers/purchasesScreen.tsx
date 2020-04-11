import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {white} from '../colors';
import PurchaseRow from '../components/purchaseRow';
import {createTestState} from '../state/testState';

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: white,
    },
});

const PurchasesScreen = () => {
    const purchases = createTestState(0, 10, 0).purchases;
    return (
        <ScrollView style={styles.background}>
            {purchases.map((purchase, index) => (
                <PurchaseRow
                    purchase={purchase}
                    onPress={() => undefined}
                    key={index}
                />
            ))}
        </ScrollView>
    );
};

export default PurchasesScreen;
