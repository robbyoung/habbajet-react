import React from 'react';
import renderer from 'react-test-renderer';
import ColorPicker from '../../app/components/colorPicker';
import {habbajetColors} from '../../app/colors';
import {fireEvent, render, wait} from '@testing-library/react-native';

describe('ColorPicker Component', () => {
    it('can render a color picker', () => {
        const component = renderer.create(
            <ColorPicker
                selected={habbajetColors[0]}
                onSelect={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onSelect event if a color is selected', async () => {
        const onSelect = jest.fn();
        const {getByTestId} = render(
            <ColorPicker selected={habbajetColors[0]} onSelect={onSelect} />,
        );

        const colorToSelect = getByTestId(`color-${habbajetColors[1]}`);
        fireEvent.press(colorToSelect);
        await wait(() => expect(onSelect).toBeCalledWith(habbajetColors[1]));
    });
});
