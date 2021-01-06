import {fireEvent, render, wait} from '@testing-library/react-native';
import React from 'react';
import WeekSelector from '../../app/components/weekSelector';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('WeekSelector Component', () => {
    it('will select previous or next stats groups based on arrow button presses', async () => {
        const purchaseStats = [
            [
                {
                    tagName: 'Tag 1',
                    total: 30,
                    percentage: 1,
                    color: '#ffffff',
                },
            ],
            [
                {
                    tagName: 'Tag 0',
                    total: 70,
                    percentage: 1,
                    color: '#000000',
                },
            ],
            [],
        ];
        const onSelect = jest.fn();
        const {getByTestId} = render(
            <WeekSelector weeklyStats={purchaseStats} onSelect={onSelect} />,
        );

        const leftArrow = getByTestId('btn-previous-week');
        fireEvent.press(leftArrow);
        await wait(() => expect(onSelect).toBeCalledWith(purchaseStats[1]));

        const rightArrow = getByTestId('btn-next-week');
        fireEvent.press(rightArrow);
        await wait(() => expect(onSelect).toBeCalledWith(purchaseStats[0]));
    });
});
