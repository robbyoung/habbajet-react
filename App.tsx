import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import HabitWheel from './app/components/habitWheel';

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <HabitWheel
                    color="#ffffff"
                    wedges={[true, true, true, true, true, true, true]}/>
            </View>
        </Provider>
    );
};

export default App;
