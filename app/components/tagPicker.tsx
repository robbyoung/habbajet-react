import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {grey, white} from '../colors';
import {Tag} from '../state';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
        color: grey,
    },
    tagList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    tag: {
        marginRight: 5,
        marginBottom: 5,
        borderWidth: 4,
        borderRadius: 8,
        borderColor: 'transparent',
    },
    selectedTag: {
        borderColor: grey,
        borderRadius: 4,
        borderStyle: 'dotted',
    },
    tagText: {
        fontSize: 20,
        color: white,
        padding: 5,
        alignSelf: 'center',
    },
});

interface TagPickerProps {
    selected: string;
    onSelect: (tagId: string) => void;
    tags: Tag[];
}
const TagPicker = (props: TagPickerProps) => {
    const tagButtons = props.tags.map(tag => (
        <TouchableOpacity
            key={tag.id}
            style={[
                styles.tag,
                {backgroundColor: tag.color},
                tag.id === props.selected ? styles.selectedTag : {},
            ]}
            onPress={() => props.onSelect(tag.id)}>
            <Text style={styles.tagText}>{tag.name}</Text>
        </TouchableOpacity>
    ));

    return (
        <View>
            <Text style={[styles.title]}>Tag</Text>
            <View style={styles.tagList}>{tagButtons}</View>
        </View>
    );
};

export default TagPicker;
