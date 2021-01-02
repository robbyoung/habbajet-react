import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getBudgetFormatted, getHabbajets} from '../selectors';
import {ScrollView, StyleSheet, View} from 'react-native';
import HabbajetList from '../components/habbajetList';
import {
    goToHabbajet,
    goToNewHabbajet,
    goToPurchases,
    goToNewPurchase,
    goToPurchaseStats,
} from '../navigation/navigation';
import {
    selectHabbajetAction,
    clearEditorAction,
    clearPurchaseEditorAction,
    reorderHabbajetListAction,
} from '../actions';
import WideButton from '../components/wideButton';
import {grey} from '../colors';
import BudgetDisplay from '../components/budgetDisplay';
import {faBars, faPlus, faChartPie} from '@fortawesome/free-solid-svg-icons';
import {saveState} from '../storage';

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
                <BudgetDisplay
                    budget={budget}
                    buttons={[
                        {
                            icon: faPlus,
                            onPress: () => {
                                dispatch(clearPurchaseEditorAction());
                                goToNewPurchase();
                            },
                        },
                        {
                            icon: faBars,
                            onPress: () => goToPurchases(),
                        },
                        {
                            icon: faChartPie,
                            onPress: () => goToPurchaseStats(),
                        },
                    ]}
                />
                <HabbajetList
                    habbajets={habbajets}
                    onSelect={habbajet => {
                        dispatch(selectHabbajetAction(habbajet.name));
                        goToHabbajet();
                    }}
                    onReorder={reordered => {
                        dispatch(reorderHabbajetListAction(reordered));
                        saveState();
                        console.log(reordered);
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
