import React from 'react';
import renderer from 'react-test-renderer';
import {habbajetColors} from '../../app/colors';
import DangerDays from '../../app/components/dangerDays';

describe('DangerDays Component', () => {
    it('renders a row with two labels', () => {
        const component = renderer.create(
            <DangerDays
                bestDay={'Monday'}
                worstDay={'Thursday'}
                color={habbajetColors[0]}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
