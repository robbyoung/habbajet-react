import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Habbajet} from '../state';
import {white} from '../colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 30,
    },
    text: {
        fontSize: 50,
        alignSelf: 'center',
        fontFamily: 'Abel',
        color: white,
        width: '100%',
        textAlign: 'center',
    },
});

interface HabbajetClaimerProps {
    habbajet: Habbajet;
    onClaim: () => void;
}
const HabbajetClaimer = (props: HabbajetClaimerProps) => {
    if (!props.habbajet.toClaim) {
        return <View />;
    }

    return (
        <TouchableOpacity onPress={() => props.onClaim()} testID="button-claim">
            <View
                style={[
                    styles.container,
                    {backgroundColor: props.habbajet.color},
                ]}>
                <Text style={[styles.text]}>
                    Claim ${props.habbajet.currentValue.toFixed(2)}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HabbajetClaimer;
