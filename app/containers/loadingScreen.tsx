import React, {useEffect} from 'react';
import {View} from 'react-native';
import {goToHabbajet} from '../navigation';

const LoadingScreen = () => {
    useEffect(() => {
        goToHabbajet();
    });

    return <View />;
};

export default LoadingScreen;
