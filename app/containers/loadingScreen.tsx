import React, {useEffect} from 'react';
import {View} from 'react-native';
import {goToHome} from '../navigation';
import {loadState} from '../storage';
import {useDispatch} from 'react-redux';
import {loadStateAction} from '../actions';

const LoadingScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function loadAndRedirect() {
            const state = await loadState();
            dispatch(loadStateAction(state));
            goToHome();
        }
        loadAndRedirect();
    });

    return <View />;
};

export default LoadingScreen;
