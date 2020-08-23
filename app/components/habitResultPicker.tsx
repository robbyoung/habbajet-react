import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import moment from 'moment';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import IconButton from './iconButton';
import {Habbajet} from '../state';
import {white} from '../colors';

const DATE_FORMAT = 'dddd, MMMM Do';
const ICON_SIZE = 100;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Abel',
        color: white,
        width: '100%',
        textAlign: 'center',
    },
});

function getDateFormatted(timestamp: string): string | undefined {
    const habbajetDate = moment(timestamp);
    if (moment().valueOf() < habbajetDate.valueOf()) {
        return undefined;
    } else {
        return habbajetDate.format(DATE_FORMAT);
    }
}

interface HabitResultPickerProps {
    habbajet: Habbajet;
    onSuccess: () => void;
    onFailure: () => void;
}
const HabitResultPicker = (props: HabitResultPickerProps) => {
    const date = getDateFormatted(props.habbajet.date);
    if (date === undefined || props.habbajet.toClaim) {
        return <View />;
    }

    return (
        <View
            style={[styles.container, {backgroundColor: props.habbajet.color}]}>
            <Text style={[styles.text]}>{date}</Text>
            <View style={[styles.buttonRow]}>
                <IconButton
                    icon={faCheck}
                    size={ICON_SIZE}
                    color={white}
                    testID="button-success"
                    onPress={() => props.onSuccess()}
                />
                <IconButton
                    icon={faTimes}
                    size={ICON_SIZE}
                    color={white}
                    testID="button-failure"
                    onPress={() => props.onFailure()}
                />
            </View>
        </View>
    );
};

export default HabitResultPicker;
