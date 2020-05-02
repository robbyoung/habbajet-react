import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getBudgetFormatted, getHabbajets} from '../selectors';
import {ScrollView, StyleSheet, View} from 'react-native';
import HabbajetList from '../components/habbajetList';
import {goToHabbajet, goToNewHabbajet, goToPurchases} from '../navigation';
import {
    selectHabbajetAction,
    clearEditorAction,
    setHabbajetToEditAction,
} from '../actions';
import WideButton from '../components/wideButton';
import {grey} from '../colors';
import BudgetDisplay from '../components/budgetDisplay';

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
                <BudgetDisplay budget={budget} onPress={goToPurchases} />
                <HabbajetList
                    habbajets={habbajets}
                    onSelect={habbajet => {
                        dispatch(setHabbajetToEditAction(habbajet));
                        dispatch(selectHabbajetAction(habbajet.name));
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
