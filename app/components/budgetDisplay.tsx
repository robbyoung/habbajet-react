import React from 'react';
import Label from '../components/label';
import {StyleSheet, View} from 'react-native';
import IconButton from './iconButton';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {grey} from '../colors';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
    },
    roundButton: {
        marginTop: 20,
        marginLeft: 25,
    },
});

interface BudgetDisplayProps {
    budget: string;
    buttons: {icon: IconDefinition; onPress: () => void}[];
}
const BudgetDisplay = (props: BudgetDisplayProps) => {
    const buttons = props.buttons.map((button, index) => {
        return (
            <View style={styles.roundButton} key={index}>
                <IconButton
                    icon={button.icon}
                    color={grey}
                    size={40}
                    testID={`button-budget-${index}`}
                    onPress={() => button.onPress()}
                />
            </View>
        );
    });

    return (
        <View style={styles.row}>
            <Label
                title="My Budget"
                content={props.budget}
                color="#959595"
                contentSize={50}
            />

            {buttons}
        </View>
    );
};

export default BudgetDisplay;
