import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {white, black} from '../colors';
import WideButton from './wideButton';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
    modal: {
        marginLeft: '15%',
        marginTop: '10%',
        backgroundColor: white,
        width: '70%',
        padding: 20,
        borderRadius: 20,
    },
    text: {
        fontSize: 24,
        paddingBottom: 20,
        textAlign: 'center',
        color: black,
    },
});

interface ConfirmationModalProps {
    id: string;
    text: string;
    onConfirm: () => void;
}
const ConfirmationModal = (props: ConfirmationModalProps) => {
    return (
        <View style={styles.modal}>
            <Text style={styles.text}>{props.text}</Text>
            <View>
                <WideButton
                    text="Yes"
                    color={black}
                    onPress={() => props.onConfirm()}
                />
                <WideButton
                    text="No"
                    color={black}
                    onPress={() => Navigation.dismissModal(props.id)}
                />
            </View>
        </View>
    );
};

export default ConfirmationModal;
