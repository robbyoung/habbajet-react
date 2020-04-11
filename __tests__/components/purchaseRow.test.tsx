import React from 'react';
import renderer from 'react-test-renderer';
import PurchaseRow from '../../app/components/purchaseRow';

describe('PurchaseRow Component', () => {
    it('can render a purchase row', () => {
        const component = renderer.create(
            <PurchaseRow
                purchase={{
                    name: 'Test Purchase',
                    cost: '$87.40',
                    date: '12/04/2020',
                }}
                onPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
