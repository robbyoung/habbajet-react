import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {goToHome, goToStartingBudget} from '../navigation';
import {loadState} from '../storage';
import {useDispatch} from 'react-redux';
import {loadStateAction} from '../actions';

const LoadingScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function loadAndRedirect() {
            const state = await loadState();
            if (state === undefined) {
                goToStartingBudget();
            } else {
                dispatch(loadStateAction(state));
                goToHome();
            }
        }
        loadAndRedirect();
    });

    return (
        <View>
            <Text>Loading</Text>
        </View>
    );
};

export default LoadingScreen;
