import React from 'react';
import renderer from 'react-test-renderer';
import {habbajetColors} from '../../app/colors';
import PieChart from '../../app/components/pieChart';

describe('PieChart Component', () => {
    it('renders a pie chart for the given stats', () => {
        const stats = [
            {
                tagName: 'Tag 1',
                total: 6,
                percentage: 0.6,
                color: habbajetColors[0],
            },
            {
                tagName: 'Tag 2',
                total: 3,
                percentage: 0.3,
                color: habbajetColors[1],
            },
            {
                tagName: 'Tag 3',
                total: 1,
                percentage: 0.1,
                color: habbajetColors[2],
            },
        ];

        const component = renderer.create(<PieChart sections={stats} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
