import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
    },
    content: {
        marginTop: -10,
        padding: 0,
        fontSize: 30,
    }
});

interface LabelProps {
    title: string;
    content: string;
    color: string;
}
const Label = (props: LabelProps) => {
    return (
        <View>
            <Text style={[styles.title, {color: props.color}]}>
                {props.title}
            </Text>
            <Text style={styles.content}>
                {props.content}
            </Text>
        </View>
    );
};

export default Label;
