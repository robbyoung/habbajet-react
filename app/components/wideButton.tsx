import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {white} from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Abel',
        color: white,
        width: '100%',
        textAlign: 'center',
        padding: 10,
    },
    highlight: {
        position: 'absolute',
        top: 17,
        right: 17,
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: white,
    },
});

interface WideButton {
    text: string;
    color: string;
    highlight?: boolean;
    testID?: string;
    onPress: () => void;
}
const WideButton = (props: WideButton) => {
    return (
        <TouchableOpacity
            testID={props.testID}
            onPress={() => props.onPress()}
            style={[styles.container, {backgroundColor: props.color}]}>
            <Text style={[styles.text]}>{props.text}</Text>
            {props.highlight ? <View style={styles.highlight} /> : null}
        </TouchableOpacity>
    );
};

export default WideButton;
