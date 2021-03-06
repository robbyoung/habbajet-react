import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {white, black, grey} from '../colors';
import WideButton from './wideButton';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: grey + '99',
    },
    modal: {
        marginLeft: '15%',
        marginTop: '20%',
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
        fontFamily: 'Abel',
    },
});

interface ConfirmationModalProps {
    id: string;
    text: string;
    onConfirm: () => void;
}
const ConfirmationModal = (props: ConfirmationModalProps) => {
    return (
        <TouchableWithoutFeedback
            testID={'modal-background'}
            onPress={() => Navigation.dismissModal(props.id)}>
            <View style={styles.background}>
                <TouchableWithoutFeedback>
                    <View style={styles.modal}>
                        <Text style={styles.text}>{props.text}</Text>
                        <View>
                            <WideButton
                                text="Yes"
                                testID="button-yes"
                                color={grey}
                                onPress={() => props.onConfirm()}
                            />
                            <WideButton
                                text="No"
                                testID="button-no"
                                color={grey}
                                onPress={() =>
                                    Navigation.dismissModal(props.id)
                                }
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ConfirmationModal;
