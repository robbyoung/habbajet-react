import React from 'react';
import renderer from 'react-test-renderer';
import WeekSelector from '../../app/components/weekSelector';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('WeekSelector Component', () => {
    const testPurchaseData = [
        [
            {
                tagName: 'Groceries',
                total: 70,
                percentage: 0.7,
                color: '#ffffff',
            },
            {
                tagName: 'Living',
                total: 30,
                percentage: 0.3,
                color: '#000000',
            },
        ],
        [
            {
                tagName: 'Groceries',
                total: 20,
                percentage: 1,
                color: '#ffffff',
            },
        ],
        [
            {
                tagName: 'Living',
                total: 60,
                percentage: 0.6,
                color: '#000000',
            },
            {
                tagName: 'Groceries',
                total: 40,
                percentage: 0.4,
                color: '#ffffff',
            },
        ],
    ];

    it('can render a week selector for purchase stats', () => {
        const component = renderer.create(
            <WeekSelector
                weeklyStats={testPurchaseData}
                onSelect={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
