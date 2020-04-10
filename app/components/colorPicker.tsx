import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {grey, habbajetColors} from '../colors';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
        color: grey,
    },
    colorRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    colorSquare: {
        width: 60,
        height: 60,
        borderRadius: 4,
        marginRight: 10,
        marginBottom: 10,
    },
    selectedColor: {
        borderColor: grey,
        borderWidth: 4,
        borderStyle: 'dotted',
    },
});

interface ColorPickerProps {
    selected: string;
    onSelect: (color: string) => void;
}
const ColorPicker = (props: ColorPickerProps) => {
    const colorButtons = habbajetColors.map(color => (
        <TouchableOpacity
            key={color}
            style={[
                styles.colorSquare,
                {backgroundColor: color},
                color === props.selected ? styles.selectedColor : {},
            ]}
            onPress={() => props.onSelect(color)}
        />
    ));

    return (
        <View>
            <Text style={[styles.title]}>Color</Text>
            <View style={styles.colorRow}>{colorButtons}</View>
        </View>
    );
};

export default ColorPicker;
