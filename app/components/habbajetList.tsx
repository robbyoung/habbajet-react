import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Habbajet} from '../state';
import WideButton from './wideButton';
import {grey} from '../colors';
import moment from 'moment';
import {DragSortableView} from 'react-native-drag-sort';

const BUTTON_WIDTH = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        fontFamily: 'Abel',
        color: grey,
    },
    draggable: {
        width: BUTTON_WIDTH,
        flexDirection: 'row',
    },
    handle: {
        width: 50,
        height: 50,
    },
});

interface HabbajetListProps {
    habbajets: Habbajet[];
    onSelect: (habbajet: Habbajet) => void;
    onReorder: (habbajets: Habbajet[]) => void;
}
const HabbajetList = (props: HabbajetListProps) => {
    const today = moment().valueOf();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Habits</Text>
            <DragSortableView
                dataSource={props.habbajets}
                parentWidth={BUTTON_WIDTH}
                childrenHeight={50}
                childrenWidth={BUTTON_WIDTH}
                marginChildrenBottom={10}
                keyExtractor={habbajet => habbajet.id}
                onDataChange={data => props.onReorder(data)}
                renderItem={(habbajet, index) => (
                    <View style={styles.draggable}>
                        <WideButton
                            text={habbajet.name}
                            color={habbajet.color}
                            highlight={
                                today > moment(habbajet.date).valueOf() ||
                                habbajet.toClaim
                            }
                            key={habbajet.name}
                            testID={`button-habbajet-${index}`}
                            onPress={() => props.onSelect(habbajet)}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default HabbajetList;
