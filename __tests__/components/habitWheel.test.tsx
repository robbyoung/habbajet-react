import React from 'react';
import renderer from 'react-test-renderer';
import HabitWheel from '../../app/components/habitWheel';
import {habbajetColors} from '../../app/colors';

describe('HabitWheel Component', () => {
    it('renders an empty circle with no successes', () => {
        const component = renderer.create(
            <HabitWheel color={habbajetColors[0]} successes={0} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a half-full circle with some successes', () => {
        const component = renderer.create(
            <HabitWheel color={habbajetColors[1]} successes={4} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a full circle with all successes', () => {
        const component = renderer.create(
            <HabitWheel color={habbajetColors[2]} successes={7} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('handles invalid success counts', () => {
        const component = renderer.create(
            <HabitWheel color={habbajetColors[3]} successes={-8} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
