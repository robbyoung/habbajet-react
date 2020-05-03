import React, {useMemo} from 'react';
import HabbajetDisplay from '../components/habbajetDisplay';
import {useSelector, useDispatch} from 'react-redux';
import {
    getSelectedHabbajet,
    getBudgetDeficit,
    checkHabbajetEquality,
} from '../selectors';
import {
    addHabitResultAction,
    updateBudgetAction,
    resetHabbajetAction,
    setHabbajetToEditAction,
} from '../actions';
import {Navigation} from 'react-native-navigation';
import {STACK_NAVIGATOR} from '../navigation';
import {saveState} from '../storage';
import {View} from 'react-native';
import {white} from '../colors';

const HabbajetScreen = () => {
    const habbajet = useSelector(getSelectedHabbajet, checkHabbajetEquality);
    const hasDeficit = useSelector(getBudgetDeficit);
    const dispatch = useDispatch();

    useMemo(() => {
        if (habbajet) {
            dispatch(setHabbajetToEditAction(habbajet));
        }
        Navigation.mergeOptions(STACK_NAVIGATOR, {
            topBar: {
                title: {
                    text: habbajet ? habbajet.name : '',
                    fontFamily: 'Abel',
                    fontSize: 30,
                    color: white,
                },
                background: {
                    color: habbajet ? habbajet.color : '',
                },
            },
        });
    }, [habbajet, dispatch]);

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
