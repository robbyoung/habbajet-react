import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import IconButton from './iconButton';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ICON_SIZE = 90;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    text: {
        fontSize: 25,
        alignSelf: 'center',
    }
});
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

interface HabitResultPickerProps {
    color: string;
    dayOfWeek: number;
    onSuccess: () => void;
    onFailure: () => void;
}
const HabitResultPicker = (props: HabitResultPickerProps) => {
    return (
        <View style={styles.container}>
            <IconButton
                icon={faCheck}
                size={ICON_SIZE}
                color={props.color}
                onPress={() => props.onSuccess()}/>
            <Text style={styles.text}>{days[props.dayOfWeek]}</Text>
            <IconButton
                icon={faTimes}
                size={ICON_SIZE}
                color={props.color}
                onPress={() => props.onFailure()}/>
        </View>
    );
};

export default HabitResultPicker;
