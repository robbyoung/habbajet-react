import React from 'react';
import renderer from 'react-test-renderer';
import StatsEntry from '../../app/components/statsEntry';
import {habbajetColors} from '../../app/colors';

describe('StatsEntry Component', () => {
    it('will display details for a set of statistics', () => {
        const component = renderer.create(
            <StatsEntry
                stats={{
                    tagName: 'Test Tag',
                    color: habbajetColors[0],
                    total: 20,
                    percentage: 0.2,
                }}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
