import React from 'react';
import renderer from 'react-test-renderer';
import FormField from '../../app/components/formField';

describe('FormField Component', () => {
    it('can render an empty form field', () => {
        const component = renderer.create(
            <FormField title="Test Field" onValueChange={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a form field with a placeholder', () => {
        const component = renderer.create(
            <FormField
                title="Test Field"
                placeholder="placeholder"
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a form field with a value', () => {
        const component = renderer.create(
            <FormField
                title="Test Field"
                placeholder="placeholder"
                value="value"
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a form field with error text', () => {
        const component = renderer.create(
            <FormField
                title="Test Field"
                placeholder="placeholder"
                value="124"
                numeric={true}
                errorText="This is an error message"
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
