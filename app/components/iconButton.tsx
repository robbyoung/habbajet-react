import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

interface IconButtonProps {
    icon: IconDefinition;
    size: number;
    color: string;
    testID?: string;
    onPress?: () => void;
    onLongPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}
const IconButton = (props: IconButtonProps) => {
    return (
        <TouchableOpacity
            onPress={props.onPress || undefined}
            onLongPress={props.onLongPress || undefined}
            style={props.containerStyle}
            testID={props.testID}>
            <FontAwesomeIcon
                icon={props.icon}
                size={props.size}
                color={props.color}
            />
        </TouchableOpacity>
    );
};

export default IconButton;
