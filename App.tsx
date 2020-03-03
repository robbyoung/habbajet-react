import React from 'react';
import {ScrollView} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import HabitWheel from './app/components/habitWheel';

const App = () => {
    return (
        <Provider store={store}>
            <ScrollView>
                <HabitWheel
                    color="#8066C2"
                    successes={1}/>
                <HabitWheel
                    color="#8066C2"
                    successes={2}/>
                <HabitWheel
                    color="#8066C2"
                    successes={3}/>
                <HabitWheel
                    color="#8066C2"
                    successes={4}/>
                <HabitWheel
                    color="#8066C2"
                    successes={5}/>
                <HabitWheel
                    color="#8066C2"
                    successes={6}/>
                <HabitWheel
                    color="#8066C2"
                    successes={7}/>
                <HabitWheel
                    color="#8066C2"
                    successes={0}/>
                <HabitWheel
                    color="#8066C2"
                    successes={-5}/>
                <HabitWheel
                    color="#8066C2"
                    successes={100}/>
            </ScrollView>
        </Provider>
    );
};

export default App;
