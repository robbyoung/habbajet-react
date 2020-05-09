import React from 'react';
import renderer from 'react-test-renderer';
import FormField from '../../app/components/formField';
import {render, fireEvent, wait} from '@testing-library/react-native';

describe('FormField Component', () => {
    it('can render an empty form field', () => {
        const component = renderer.create(
            <FormField
                title="Test Field"
                field={{
                    value: '',
                    errorMessage: '',
                }}
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a form field with a placeholder', () => {
        const component = renderer.create(
            <FormField
                field={{
                    value: '',
                    errorMessage: '',
                }}
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
                field={{
                    value: 'value',
                    errorMessage: '',
                }}
                title="Test Field"
                placeholder="placeholder"
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a form field with error text', () => {
        const component = renderer.create(
            <FormField
                field={{
                    value: '124',
                    errorMessage: 'This is an error message',
                }}
                title="Test Field"
                placeholder="placeholder"
                numeric={true}
                onValueChange={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onValueChange event if text changes', async () => {
        const onValueChange = jest.fn();
        const {getByTestId} = render(
            <FormField
                field={{
                    value: 'marco',
                    errorMessage: '',
                }}
                title="Test Field"
                onValueChange={onValueChange}
            />,
        );

        const input = getByTestId('input-Test-Field');
        fireEvent.changeText(input, 'polo');
        await wait(() => expect(onValueChange).toBeCalledWith('polo'));
    });
});
