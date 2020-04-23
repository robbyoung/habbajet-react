import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {white} from '../colors';
import PurchaseRow from '../components/purchaseRow';
import {useSelector} from 'react-redux';
import {getPurchaseListFormatted} from '../selectors';

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: white,
    },
});

const PurchasesScreen = () => {
    const purchases = useSelector(getPurchaseListFormatted);

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
