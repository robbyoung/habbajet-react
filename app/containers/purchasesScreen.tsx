import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {white, grey} from '../colors';
import PurchaseRow from '../components/purchaseRow';
import {useSelector, useDispatch} from 'react-redux';
import {getPurchaseListFormatted} from '../selectors';
import {setPurchaseToEditAction} from '../actions';
import {goToEditPurchase} from '../navigation/navigation';

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: white,
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

const PurchasesScreen = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(getPurchaseListFormatted);

    if (purchases.length === 0) {
        return <Text style={styles.empty}>No Purchases Yet</Text>;
    }

    return (
        <ScrollView style={styles.background}>
            {purchases.map((purchase, index) => (
                <PurchaseRow
                    purchase={purchase}
                    onPress={() => {
                        dispatch(setPurchaseToEditAction(purchase.unformatted));
                        goToEditPurchase();
                    }}
                    key={index}
                    testID={`purchase-${index}`}
                />
            ))}
        </ScrollView>
    );
};

export default PurchasesScreen;
