import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Label from '../components/label';
import {getBudgetFormatted, getHabbajets} from '../selectors';
import {ScrollView, StyleSheet, View} from 'react-native';
import HabbajetList from '../components/habbajetList';
import {goToHabbajet} from '../navigation';
import {selectHabbajetAction} from '../actions';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

const HomeScreen = () => {
    const budget = useSelector(getBudgetFormatted);
    const habbajets = useSelector(getHabbajets);
    const dispatch = useDispatch();

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
                    onSelect={name => {
                        dispatch(selectHabbajetAction(name));
                        goToHabbajet();
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;