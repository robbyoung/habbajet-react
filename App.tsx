import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import IconButton from './app/components/iconButton';

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <IconButton/>
            </View>
        </Provider>
    );
};

export default App;
