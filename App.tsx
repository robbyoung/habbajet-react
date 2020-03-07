import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import IconButton from './app/components/iconButton';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <IconButton
                    color="#fc8803"
                    size={70}
                    icon={faCoffee}
                    onPress={() => console.error('hey')}
                />
            </View>
        </Provider>
    );
};

export default App;
