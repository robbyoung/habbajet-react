import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Label from '../components/label';
import {getBudgetFormatted, getHabbajets} from '../selectors';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import HabbajetList from '../components/habbajetList';
import {goToHabbajet, goToNewHabbajet, goToPurchases} from '../navigation';
import {selectHabbajetAction, clearEditorAction} from '../actions';
import WideButton from '../components/wideButton';
import {grey} from '../colors';

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
                <TouchableOpacity onPress={() => goToPurchases()}>
                    <Label
                        title="My Budget"
                        content={budget}
                        color="#959595"
                        contentSize={50}
                    />
                </TouchableOpacity>
                <HabbajetList
                    habbajets={habbajets}
                    onSelect={name => {
                        dispatch(selectHabbajetAction(name));
                        goToHabbajet();
                    }}
                />
                <WideButton
                    text="New Habbajet"
                    color={grey}
                    onPress={() => {
                        dispatch(clearEditorAction());
                        goToNewHabbajet();
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
