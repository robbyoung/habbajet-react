import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import HabitResultPicker from './app/components/habitResultPicker';

const App = () => {
    return (
        <Provider store={store}>
            <HabitResultPicker
                color={'#8742f5'}
                dayOfWeek={0}
                onSuccess={() => undefined}
                onFailure={() => undefined}
            />
        </Provider>
    );
};

export default App;
