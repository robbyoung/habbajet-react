import React from 'react';
import IconButton from './iconButton';
import {StyleSheet} from 'react-native';
import {white} from '../colors';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

const styles = StyleSheet.create({
    button: {
        paddingRight: 15,
    },
});

interface NavigationButtonProps {
    icon: IconDefinition;
    testID?: string;
    onPress: () => void;
}
const NavigationButton = (props: NavigationButtonProps) => (
    <IconButton
        size={25}
        color={white}
        icon={props.icon}
        testID={props.testID}
        containerStyle={styles.button}
        onPress={() => props.onPress()}
    />
);

export default NavigationButton;
