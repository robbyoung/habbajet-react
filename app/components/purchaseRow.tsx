import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {grey, lightGrey, white} from '../colors';
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
        justifyContent: 'space-between',
    },
    largeText: {
        fontSize: 30,
        fontFamily: 'Abel',
    },
    dateText: {
        padding: 3,
        fontSize: 20,
        fontFamily: 'Abel',
        color: grey,
        paddingVertical: 3,
    },
    tagWrapper: {
        borderRadius: 5,
    },
    tagText: {
        fontSize: 20,
        fontFamily: 'Abel',
        color: white,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
});

interface PurchaseRowProps {
    purchase: FormattedPurchase;
    onPress: () => void;
}
const PurchaseRow = (props: PurchaseRowProps) => {
    const tag =
        props.purchase.tagText !== '' ? (
            <View
                style={[
                    styles.tagWrapper,
                    {backgroundColor: props.purchase.tagColor},
                ]}>
                <Text style={styles.tagText}>{props.purchase.tagText}</Text>
            </View>
        ) : (
            <View />
        );

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.largeText}>{props.purchase.name}</Text>
                <Text style={styles.largeText}>{props.purchase.cost}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.dateText}>{props.purchase.date}</Text>
                {tag}
            </View>
        </TouchableOpacity>
    );
};

export default PurchaseRow;
