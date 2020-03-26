import React from 'react';
import HabbajetDisplay from '../components/habbajetDisplay';
import {useSelector, useDispatch} from 'react-redux';
import {getHabbajets} from '../selector/habbajets';
import {
    addHabitResultAction,
    updateBudgetAction,
    resetHabbajetAction,
} from '../actions';

const HabbajetScreen = () => {
    const habbajets = useSelector(getHabbajets);
    const dispatch = useDispatch();

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
