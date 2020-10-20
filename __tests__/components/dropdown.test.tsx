import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../../app/components/dropdown';

describe('Dropdown Component', () => {
    it('can render a dropdown', () => {
        const component = renderer.create(
            <Dropdown
                title="Test Dropdown"
                selected={'one'}
                options={[
                    {key: 'Option one', value: 'one'},
                    {key: 'Option two', value: 'two'},
                ]}
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will default to "None Selected"', () => {
        const component = renderer.create(
            <Dropdown
                title="Test Dropdown"
                options={[
                    {key: 'Option one', value: 'one'},
                    {key: 'Option two', value: 'two'},
                ]}
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
