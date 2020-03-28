import React from 'react';
import {useSelector} from 'react-redux';
import Label from '../components/label';
import {getBudgetFormatted, getHabbajets} from '../selectors';
import {ScrollView, StyleSheet, View} from 'react-native';
import HabbajetList from '../components/habbajetList';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

const HomeScreen = () => {
    const budget = useSelector(getBudgetFormatted);
    const habbajets = useSelector(getHabbajets);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Label
                    title="My Budget"
                    content={budget}
                    color="#959595"
                    contentSize={50}
                />
                <HabbajetList
                    habbajets={habbajets}
                    onSelect={_name => undefined}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
