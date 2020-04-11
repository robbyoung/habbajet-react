import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {grey, lightGrey} from '../colors';
import {FormattedPurchase} from '../selectors';

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: lightGrey,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 30,
        fontFamily: 'Abel',
        width: '50%',
    },
    cost: {
        fontSize: 30,
        fontFamily: 'Abel',
        textAlign: 'right',
        width: '50%',
    },
    date: {
        fontSize: 20,
        fontFamily: 'Abel',
        color: grey,
    },
});

interface PurchaseRowProps {
    purchase: FormattedPurchase;
    onPress: () => void;
}
const PurchaseRow = (props: PurchaseRowProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.name}>{props.purchase.name}</Text>
                <Text style={styles.cost}>{props.purchase.cost}</Text>
            </View>
            <Text style={styles.date}>{props.purchase.date}</Text>
        </TouchableOpacity>
    );
};

export default PurchaseRow;
