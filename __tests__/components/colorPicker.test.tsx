import React from 'react';
import renderer from 'react-test-renderer';
import ColorPicker from '../../app/components/colorPicker';
import {habbajetColors} from '../../app/colors';

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
});
