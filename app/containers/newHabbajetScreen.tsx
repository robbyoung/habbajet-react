import React from 'react';
import {useDispatch} from 'react-redux';
import {ScrollView, StyleSheet, View} from 'react-native';
import {addHabbajetAction} from '../actions';
import WideButton from '../components/wideButton';
import {grey, habbajetColors, white} from '../colors';
import {goBack} from '../navigation';
import {saveState} from '../storage';
import FormField from '../components/formField';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

const NewHabbajetScreen = () => {
    const dispatch = useDispatch();
    const habbajetName = `h${Math.floor(Math.random() * 1000)}`;
    const colorIndex = Math.floor(Math.random() * habbajetColors.length);

    return (
        <ScrollView style={styles.container}>
            <View>
                <FormField
                    title="Name"
                    value="My Habbajet"
                    onValueChange={() => undefined}
                />
                <WideButton
                    text="Done"
                    onPress={() => {
                        dispatch(
                            addHabbajetAction(
                                habbajetName,
                                200,
                                2,
                                habbajetColors[colorIndex],
                            ),
                        );
                        goBack();
                        saveState();
                    }}
                    color={grey}
                />
            </View>
        </ScrollView>
    );
};

export default NewHabbajetScreen;
