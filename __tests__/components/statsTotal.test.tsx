import React from 'react';
import renderer from 'react-test-renderer';
import StatsTotal from '../../app/components/statsTotal';

describe('StatsTotal Component', () => {
    it('can render a total label for the stats screen', () => {
        const component = renderer.create(
            <StatsTotal
                stats={[
                    {
                        total: 10,
                        color: '#ffffff',
                        percentage: 0.1,
                        tagName: 'testTag1',
                    },
                    {
                        total: 90,
                        color: '#000000',
                        percentage: 0.9,
                        tagName: 'testTag2',
                    },
                ]}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
