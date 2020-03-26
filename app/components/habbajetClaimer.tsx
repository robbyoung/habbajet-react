import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Habbajet} from '../state';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 30,
    },
    text: {
        fontSize: 50,
        alignSelf: 'center',
        fontFamily: 'Abel',
        color: '#fff',
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
        <TouchableOpacity onPress={() => props.onClaim()}>
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
