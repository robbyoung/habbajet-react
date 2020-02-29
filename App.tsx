import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <Text>Habbajet</Text>
            </View>
        </Provider>
    );
};

export default App;
