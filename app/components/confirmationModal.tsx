import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';
import {grey, white, black} from '../colors';
import WideButton from './wideButton';

const styles = StyleSheet.create({
    background: {
        // position: 'absolute',
        backgroundColor: grey,
        opacity: 0.5,
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
    },
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
    text: string;
    visible: boolean;
    onConfirm: () => void;
    onDismiss: () => void;
}
const ConfirmationModal = (props: ConfirmationModalProps) => {
    if (!props.visible) {
        return <View />;
    }
    return (
        <TouchableWithoutFeedback onPress={() => props.onDismiss()}>
            <View style={styles.background}>
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
                            onPress={() => props.onDismiss()}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ConfirmationModal;
