import React from 'react';
import Label from '../components/label';
import {StyleSheet, View} from 'react-native';
import IconButton from './iconButton';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {grey} from '../colors';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    arrowButton: {
        marginTop: 20,
        marginLeft: 20,
    },
});

interface BudgetDisplayProps {
    budget: string;
    onPress: () => void;
}
const BudgetDisplay = (props: BudgetDisplayProps) => {
    return (
        <View style={styles.row}>
            <Label
                title="My Budget"
                content={props.budget}
                color="#959595"
                contentSize={50}
            />
            <View style={styles.arrowButton}>
                <IconButton
                    icon={faArrowCircleRight}
                    color={grey}
                    size={40}
                    testID="button-arrow"
                    onPress={() => props.onPress()}
                />
            </View>
        </View>
    );
};

export default BudgetDisplay;
