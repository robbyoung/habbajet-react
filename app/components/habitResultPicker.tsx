import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import IconButton from './iconButton';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

const ICON_SIZE = 100;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Abel',
        color: '#fff',
        width: 60,
        textAlign: 'center'
    },
});
const days = [
    'Mon',
    'Tues',
    'Weds',
    'Thurs',
    'Fri',
    'Sat',
    'Sun',
];

interface HabitResultPickerProps {
    color: string;
    dayOfWeek: number;
    onSuccess: () => void;
    onFailure: () => void;
}
const HabitResultPicker = (props: HabitResultPickerProps) => {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <IconButton
                icon={faCheck}
                size={ICON_SIZE}
                color={'#fff'}
                onLongPress={() => props.onSuccess()}
            />
            <Text style={[styles.text]}>
                {days[props.dayOfWeek]}
            </Text>
            <IconButton
                icon={faTimes}
                size={ICON_SIZE}
                color={'#fff'}
                onLongPress={() => props.onFailure()}
            />
        </View>
    );
};

export default HabitResultPicker;
