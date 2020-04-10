import React from 'react';
import renderer from 'react-test-renderer';
import HabitWheel from '../../app/components/habitWheel';
import {habbajetColors} from '../../app/colors';

describe('HabitWheel Component', () => {
    it('renders an empty circle with no successes', () => {
        const component = renderer.create(
            <HabitWheel color={habbajetColors[0]} results={[]} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a half-full circle with some successes', () => {
        const results = [true, false, true, true];
        const component = renderer.create(
            <HabitWheel color={habbajetColors[1]} results={results} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a full circle with all successes', () => {
        const results = [true, true, true, true, true, true, true];
        const component = renderer.create(
            <HabitWheel color={habbajetColors[2]} results={results} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
