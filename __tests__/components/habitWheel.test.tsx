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
        const results = [0, 2, 0, 0];
        const component = renderer.create(
            <HabitWheel color={habbajetColors[1]} results={results} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a full circle with all successes', () => {
        const results = [0, 0, 0, 0, 0, 0, 0];
        const component = renderer.create(
            <HabitWheel color={habbajetColors[2]} results={results} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will a count slack days as successes', () => {
        const results = [1, 1, 1, 1, 1];
        const component = renderer.create(
            <HabitWheel color={habbajetColors[3]} results={results} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
