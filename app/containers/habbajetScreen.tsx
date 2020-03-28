import React, {useEffect} from 'react';
import HabbajetDisplay from '../components/habbajetDisplay';
import {useSelector, useDispatch} from 'react-redux';
import {getHabbajets} from '../selectors';
import {
    addHabitResultAction,
    updateBudgetAction,
    resetHabbajetAction,
} from '../actions';
import {Navigation} from 'react-native-navigation';
import {STACK_NAVIGATOR} from '../navigation';
import {saveState} from '../storage';

const HabbajetScreen = () => {
    const habbajets = useSelector(getHabbajets);
    const dispatch = useDispatch();

    useEffect(() => {
        Navigation.mergeOptions(STACK_NAVIGATOR, {
            topBar: {
                title: {
                    text: habbajets[0].name,
                },
                background: {
                    color: habbajets[0].color,
                },
            },
        });
    }, [habbajets]);

    return (
        <HabbajetDisplay
            habbajet={habbajets[0]}
            onSuccess={() => {
                dispatch(addHabitResultAction(habbajets[0].name, true));
                saveState();
            }}
            onFailure={() => {
                dispatch(addHabitResultAction(habbajets[0].name, false));
                saveState();
            }}
            onClaim={() => {
                dispatch(updateBudgetAction(habbajets[0].currentValue));
                dispatch(resetHabbajetAction(habbajets[0].name));
                saveState();
            }}
        />
    );
};

export default HabbajetScreen;
