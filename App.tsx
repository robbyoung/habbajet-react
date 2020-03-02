import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import HabitWheel from './app/components/habitWheel';

const App = () => {
    return (
        <Provider store={store}>
            <ScrollView>
                <HabitWheel
                    color="#8066C2"
                    wedges={[true, true, true, true, true, true, true]}/>
                <HabitWheel
                    color="#8066C2"
                    wedges={[false, true, false, true, false, true, true]}/>
                <HabitWheel
                    color="#8066C2"
                    wedges={[true, false, false, true, false, true, false]}/>
            </ScrollView>
        </Provider>
    );
};

export default App;
