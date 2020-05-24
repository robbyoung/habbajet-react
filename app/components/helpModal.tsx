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
        borderRadius: 20,
    },
    title: {
        color: white,
        backgroundColor: grey,
        paddingVertical: 10,
        fontSize: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        textAlign: 'center',
        fontFamily: 'Abel',
    },
    text: {
        fontSize: 24,
        paddingBottom: 20,
        textAlign: 'center',
        color: black,
        fontFamily: 'Abel',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
});

interface HelpModalProps {
    id: string;
    title: string;
    content: string;
}
const HelpModal = (props: HelpModalProps) => {
    return (
        <TouchableWithoutFeedback
            testID={'modal-background'}
            onPress={() => Navigation.dismissModal(props.id)}>
            <View style={styles.background}>
                <TouchableWithoutFeedback>
                    <View style={styles.modal}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.text}>{props.content}</Text>
                        <View style={styles.button}>
                            <WideButton
                                text="OK"
                                testID="button-ok"
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

export default HelpModal;
