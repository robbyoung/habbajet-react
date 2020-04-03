import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
});

interface WideButton {
    text: string;
    color: string;
    onPress: () => void;
}
const WideButton = (props: WideButton) => {
    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
            style={[styles.container, {backgroundColor: props.color}]}>
            <Text style={[styles.text]}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default WideButton;
