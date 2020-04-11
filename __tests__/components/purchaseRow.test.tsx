import React from 'react';
import renderer from 'react-test-renderer';
import PurchaseRow from '../../app/components/purchaseRow';
import {createTestState} from '../../app/state/testState';

describe('PurchaseRow Component', () => {
    it('can render a purchase row', () => {
        const purchase = createTestState(0, 1, 0).purchases[0];
        const component = renderer.create(
            <PurchaseRow purchase={purchase} onPress={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
