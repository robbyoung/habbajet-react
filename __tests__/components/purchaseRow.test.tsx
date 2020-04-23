import React from 'react';
import renderer from 'react-test-renderer';
import PurchaseRow from '../../app/components/purchaseRow';
import {habbajetColors} from '../../app/colors';

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
                }}
                onPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
