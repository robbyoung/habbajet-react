import React from 'react';
import renderer from 'react-test-renderer';
import PurchaseRow from '../../app/components/purchaseRow';
import {habbajetColors} from '../../app/colors';
import {render, fireEvent, wait} from '@testing-library/react-native';

describe('PurchaseRow Component', () => {
    it('can render a purchase row', () => {
        const component = renderer.create(
            <PurchaseRow
                purchase={{
                    name: 'Test Purchase',
                    cost: '$87.40',
                    date: '12/04/2020',
                    tagText: 'Tag',
                    tagColor: habbajetColors[0],
                    unformatted: {
                        id: '0',
                        name: 'Test Purchase',
                        cost: 87.4,
                        date: 'date',
                        tagId: '0',
                    },
                }}
                onPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a purchase row without a tag', () => {
        const component = renderer.create(
            <PurchaseRow
                purchase={{
                    name: 'Test Purchase',
                    cost: '$87.40',
                    date: '12/04/2020',
                    tagText: '',
                    tagColor: '',
                    unformatted: {
                        id: '0',
                        name: 'Test Purchase',
                        cost: 87.4,
                        date: 'date',
                        tagId: '0',
                    },
                }}
                onPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onPress callback if the row is pressed', async () => {
        const onPress = jest.fn();
        const {getByTestId} = render(
            <PurchaseRow
                purchase={{
                    name: 'Test Purchase',
                    cost: '$87.40',
                    date: '12/04/2020',
                    tagText: 'Tag',
                    tagColor: habbajetColors[0],
                    unformatted: {
                        id: '0',
                        name: 'Test Purchase',
                        cost: 87.4,
                        date: 'date',
                        tagId: '0',
                    },
                }}
                testID="test-purchase"
                onPress={onPress}
            />,
        );

        const row = getByTestId('test-purchase');
        fireEvent.press(row);
        await wait(() => expect(onPress).toBeCalled());
    });
});
