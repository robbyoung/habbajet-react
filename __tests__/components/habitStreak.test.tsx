import React from 'react';
import renderer from 'react-test-renderer';
import {habbajetColors} from '../../app/colors';
import HabitStreak from '../../app/components/habitStreak';

describe('HabitStreak Component', () => {
    it('renders bars for the current and best streak', () => {
        const component = renderer.create(
            <HabitStreak color={habbajetColors[0]} current={3} best={20} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders identical bars for equal current and best', () => {
        const component = renderer.create(
            <HabitStreak color={habbajetColors[1]} current={10} best={10} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a sliver bar for zero-value current streaks', () => {
        const component = renderer.create(
            <HabitStreak color={habbajetColors[2]} current={0} best={10} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('handles zero-value best streaks', () => {
        const component = renderer.create(
            <HabitStreak color={habbajetColors[3]} current={10} best={0} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('handles negative streak values', () => {
        const component = renderer.create(
            <HabitStreak color={habbajetColors[4]} current={-10} best={30} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
