import React from 'react';
import renderer from 'react-test-renderer';
import HabitWheel from '../../app/components/habitWheel';

describe('HabitWheel Component', () => {
    it('renders an empty circle with no successes', () => {
        const component = renderer.create(
            <HabitWheel color={'#C70039'} successes={0} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a half-full circle with some successes', () => {
        const component = renderer.create(
            <HabitWheel color={'#EBD22F'} successes={4} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a full circle with all successes', () => {
        const component = renderer.create(
            <HabitWheel color={'#404FCD'} successes={7} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('handles invalid success counts', () => {
        const component = renderer.create(
            <HabitWheel color={'#44CD40'} successes={-8} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
