import React from 'react';
import renderer from 'react-test-renderer';
import {habbajetColors} from '../../app/colors';
import SlackDays from '../../app/components/slackDays';

describe('SlackDays Component', () => {
    it('renders circles to represent slack days', () => {
        const component = renderer.create(
            <SlackDays color={habbajetColors[0]} total={6} remaining={6} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders grey circles for used slack days', () => {
        const component = renderer.create(
            <SlackDays color={habbajetColors[1]} total={3} remaining={0} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('hides if there are no slack days', () => {
        const component = renderer.create(
            <SlackDays color={habbajetColors[2]} total={0} remaining={0} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
