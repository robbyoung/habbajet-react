import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import HabbajetScreen from './app/containers/habbajetScreen';

const App = () => {
    return (
        <Provider store={store}>
            <HabbajetScreen />
        </Provider>
    );
};

export default App;
