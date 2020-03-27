import React, {useEffect} from 'react';
import HabbajetDisplay from '../components/habbajetDisplay';
import {useSelector, useDispatch} from 'react-redux';
import {getHabbajets} from '../selector/habbajets';
import {
    addHabitResultAction,
    updateBudgetAction,
    resetHabbajetAction,
} from '../actions';
import {Navigation} from 'react-native-navigation';

const HabbajetScreen = () => {
    const habbajets = useSelector(getHabbajets);
    const dispatch = useDispatch();

    useEffect(() => {
        Navigation.mergeOptions('navigation', {
            topBar: {
                title: {
                    text: habbajets[0].name,
                    fontFamily: 'Abel',
                    fontSize: 30,
                    color: '#ffffff',
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
            onSuccess={() =>
                dispatch(addHabitResultAction(habbajets[0].name, true))
            }
            onFailure={() =>
                dispatch(addHabitResultAction(habbajets[0].name, false))
            }
            onClaim={() => {
                dispatch(updateBudgetAction(habbajets[0].currentValue));
                dispatch(resetHabbajetAction(habbajets[0].name));
            }}
        />
    );
};

export default HabbajetScreen;
