import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {white} from '../colors';
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
});

const PurchasesScreen = () => {
    const dispatch = useDispatch();
    const purchases = useSelector(getPurchaseListFormatted);

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
