import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getHabbajetDangerDays} from '../selectors';
import Label from './label';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
    },
});

const DangerDays = () => {
    const data = useSelector(getHabbajetDangerDays);

    if (data === undefined) {
        return <View />;
    }

    return (
        <View style={styles.container}>
            <Label title="Best Day" content={data.bestDay} color={data.color} />
            <Label
                title="Worst Day"
                content={data.worstDay}
                color={data.color}
            />
        </View>
    );
};

export default DangerDays;
