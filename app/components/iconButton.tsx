import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({

});

interface IconButtonProps {
}
const IconButton = (props: IconButtonProps) => {
    return (
        <TouchableOpacity>
            <View>
                <FontAwesomeIcon icon={faCheck}/>
            </View>
        </TouchableOpacity>
    );
};

export default IconButton;
