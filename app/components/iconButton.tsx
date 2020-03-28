import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

interface IconButtonProps {
    icon: IconDefinition;
    size: number;
    color: string;
    onPress?: () => void;
    onLongPress?: () => void;
}
const IconButton = (props: IconButtonProps) => {
    return (
        <TouchableOpacity
            onPress={props.onPress || undefined}
            onLongPress={props.onLongPress || undefined}>
            <FontAwesomeIcon
                icon={props.icon}
                size={props.size}
                color={props.color}
            />
        </TouchableOpacity>
    );
};

export default IconButton;
