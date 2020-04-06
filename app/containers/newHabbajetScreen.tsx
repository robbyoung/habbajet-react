import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, StyleSheet} from 'react-native';
import {addHabbajetAction} from '../actions';
import WideButton from '../components/wideButton';
import {grey, habbajetColors, white} from '../colors';
import {goBack} from '../navigation';
import {saveState} from '../storage';
import FormField from '../components/formField';
import {getEditorNameField, getEditorValueField} from '../selectors';

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
    const nameField = useSelector(getEditorNameField);
    const valueField = useSelector(getEditorValueField);

    const habbajetName = `h${Math.floor(Math.random() * 1000)}`;
    const colorIndex = Math.floor(Math.random() * habbajetColors.length);

    return (
        <ScrollView style={styles.container}>
            <FormField
                field={nameField}
                title="Name"
                onValueChange={() => undefined}
            />
            <FormField
                field={valueField}
                title="Value"
                placeholder={'2'}
                numeric={true}
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
        </ScrollView>
    );
};

export default NewHabbajetScreen;
