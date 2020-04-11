import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {grey, lightGrey} from '../colors';
import {Purchase} from '../state';
import moment from 'moment';

const DATE_FORMAT = 'DD/MM/YYYY';
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
    purchase: Purchase;
    onPress: () => void;
}
const PurchaseRow = (props: PurchaseRowProps) => {
    const cost = `$${props.purchase.cost.toFixed(2)}`;
    const date = moment(props.purchase.date).format(DATE_FORMAT);

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.name}>{props.purchase.name}</Text>
                <Text style={styles.cost}>{cost}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </TouchableOpacity>
    );
};

export default PurchaseRow;
