import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmationModal from '../../app/components/confirmationModal';

describe('Confirmation Modal Component', () => {
    it('can render a confirmation modal', () => {
        const component = renderer.create(
            <ConfirmationModal
                text="This is a confirmation modal"
                id="testId"
                onConfirm={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
