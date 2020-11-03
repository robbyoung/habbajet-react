import React from 'react';
import {View, StyleSheet} from 'react-native';
import Label from './label';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
    },
});

interface DangerDaysProps {
    bestDay: string;
    worstDay: string;
    color: string;
}
const DangerDays = (props: DangerDaysProps) => {
    return (
        <View style={styles.container}>
            <Label
                title="Best Day"
                content={props.bestDay}
                color={props.color}
            />
            <Label
                title="Worst Day"
                content={props.worstDay}
                color={props.color}
            />
        </View>
    );
};

export default DangerDays;
