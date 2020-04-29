import React, {useEffect} from 'react';
import HabbajetDisplay from '../components/habbajetDisplay';
import {useSelector, useDispatch} from 'react-redux';
import {getSelectedHabbajet, getBudgetDeficit} from '../selectors';
import {
    addHabitResultAction,
    updateBudgetAction,
    resetHabbajetAction,
} from '../actions';
import {Navigation} from 'react-native-navigation';
import {STACK_NAVIGATOR} from '../navigation';
import {saveState} from '../storage';
import {View} from 'react-native';

const HabbajetScreen = () => {
    const habbajet = useSelector(getSelectedHabbajet);
    const hasDeficit = useSelector(getBudgetDeficit);
    const dispatch = useDispatch();

    useEffect(() => {
        Navigation.mergeOptions(STACK_NAVIGATOR, {
            topBar: {
                title: {
                    text: habbajet ? habbajet.name : '',
                },
                background: {
                    color: habbajet ? habbajet.color : '',
                },
            },
        });
    }, [habbajet]);

    if (habbajet === undefined) {
        return <View />;
    }

    return (
        <HabbajetDisplay
            habbajet={habbajet}
            hasDeficit={hasDeficit}
            onSuccess={() => {
                dispatch(addHabitResultAction(habbajet.name, true));
                saveState();
            }}
            onFailure={() => {
                dispatch(addHabitResultAction(habbajet.name, false));
                saveState();
            }}
            onClaim={() => {
                dispatch(updateBudgetAction(habbajet.currentValue));
                dispatch(resetHabbajetAction(habbajet.name));
                saveState();
            }}
        />
    );
};

export default HabbajetScreen;
