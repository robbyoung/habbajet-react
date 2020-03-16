import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import Label from './app/components/label';

const App = () => {
    return (
        <Provider store={store}>
            <Label
                title="Title"
                content="Content"
                color="#32a852"
            />
        </Provider>
    );
};

export default App;
