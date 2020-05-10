import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import WideButton from '../components/wideButton';
import {grey, white, habbajetColors} from '../colors';
import {updatePurchaseEditorAction, addTagAction} from '../actions';
import {goBack} from '../navigation';
import FormField from '../components/formField';
import {saveState} from '../storage';
import ColorPicker from '../components/colorPicker';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: white,
    },
});

const NewTagScreen = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [color, setColor] = useState(habbajetColors[0]);
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);

    if (validated) {
        const action = addTagAction(name, color);
        dispatch(action);
        dispatch(updatePurchaseEditorAction('Tag', action.newTag.id));
        goBack();
        saveState();
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <FormField
                    title="Name"
                    field={{
                        value: name,
                        errorMessage: error,
                    }}
                    onValueChange={value => {
                        setName(value);
                        setError('');
                        setValidated(false);
                    }}
                />
                <ColorPicker
                    selected={color}
                    onSelect={selected => setColor(selected)}
                />
                <WideButton
                    text="Done"
                    color={grey}
                    onPress={() => {
                        const nameValue = name.trim();
                        if (nameValue.length === 0) {
                            setError('Tag must have a name');
                        }
                        setValidated(true);
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default NewTagScreen;
