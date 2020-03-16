import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
    return <Provider store={store} />;
};

export default App;
