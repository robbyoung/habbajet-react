import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import WideButton from '../components/wideButton';
import {useState} from 'react';
import {grey} from '../colors';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FormField from '../components/formField';
import {updateBudgetAction} from '../actions';
import {goToHome} from '../navigation';
import {saveState} from '../storage';

const WELCOME_TEXT = 'Welcome to Habbajet!';
const INFO_TEXT =
    "Before you start tracking your habits, you'll need to set your starting budget.";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    text: {
        fontFamily: 'Abel',
        fontSize: 30,
        marginBottom: 10,
    },
    smallText: {
        fontFamily: 'Abel',
        fontSize: 20,
        marginBottom: 10,
    },
});

const StartingBudgetScreen = () => {
    const dispatch = useDispatch();
    const [budget, setBudget] = useState('');
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (validated && error === '') {
            const startBudget = parseFloat(budget);
            dispatch(updateBudgetAction(startBudget));
            goToHome();
            saveState();
        }
    });

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>{WELCOME_TEXT}</Text>
                <Text style={styles.smallText}>{INFO_TEXT}</Text>
                <FormField
                    title="Starting Budget"
                    field={{
                        value: budget,
                        errorMessage: error,
                    }}
                    onValueChange={value => {
                        setBudget(value);
                        setError('');
                        setValidated(false);
                    }}
                    numeric={true}
                />
                <WideButton
                    text="Done"
                    color={grey}
                    onPress={() => {
                        const budgetValue = parseFloat(budget);
                        console.log(budgetValue);
                        if (isNaN(budgetValue) || budgetValue < 0) {
                            setError('Must be a positive number');
                        }
                        setValidated(true);
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default StartingBudgetScreen;
