import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {grey} from '../colors';

const styles = StyleSheet.create({
    container: {},
    title: {
        color: grey,
        fontFamily: 'Abel',
        fontSize: 20,
    },
    pickerBackground: {
        borderColor: grey,
        borderRadius: 5,
        borderWidth: 1,
    },
    pickerItem: {
        fontFamily: 'Abel',
        fontSize: 20,
        backgroundColor: grey,
    },
});

interface DropdownProps {
    title: string;
    options: {key: string; value: string}[];
    selected: string | undefined;
    onValueChange: (value: string) => void;
}
const Dropdown = (props: DropdownProps) => {
    const pickerItems =
        props.selected === undefined
            ? [<Picker.Item label={'None Selected'} value={''} key="" />]
            : [];
    props.options.forEach(option =>
        pickerItems.push(
            <Picker.Item
                label={option.key}
                key={option.value}
                value={option.value}
            />,
        ),
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.pickerBackground}>
                <Picker
                    onValueChange={value =>
                        props.onValueChange(value as string)
                    }
                    selectedValue={props.selected}
                    itemStyle={styles.pickerItem}>
                    {pickerItems}
                </Picker>
            </View>
        </View>
    );
};

export default Dropdown;
