import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import WideButton from '../components/wideButton';
import {grey, white} from '../colors';
import {addPurchaseAction} from '../actions';
import {goBack} from '../navigation';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

const NewPurchaseScreen = () => {
    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.container}>
            <WideButton
                text="Done"
                color={grey}
                onPress={() => {
                    dispatch(addPurchaseAction('Something', 100, '0'));
                    goBack();
                }}
            />
        </ScrollView>
    );
};

export default NewPurchaseScreen;
