import React from 'react';
import renderer from 'react-test-renderer';
import BudgetDisplay from '../../app/components/budgetDisplay';
import {render, fireEvent, wait} from '@testing-library/react-native';
import {
    faBed,
    faAnkh,
    faDiceOne,
    faDiceTwo,
} from '@fortawesome/free-solid-svg-icons';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('Budget Display Component', () => {
    it('can render a budget display without buttons', () => {
        const component = renderer.create(
            <BudgetDisplay budget="$56.43" buttons={[]} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a budget display with buttons', () => {
        const component = renderer.create(
            <BudgetDisplay
                budget="$212.12"
                buttons={[
                    {
                        icon: faBed,
                        onPress: () => undefined,
                    },
                    {
                        icon: faAnkh,
                        onPress: () => undefined,
                    },
                ]}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onPress callback for a button if it is pressed', async () => {
        const callbackOne = jest.fn();
        const callbackTwo = jest.fn();
        const {getByTestId} = render(
            <BudgetDisplay
                budget="$212.12"
                buttons={[
                    {
                        icon: faDiceOne,
                        onPress: callbackOne,
                    },
                    {
                        icon: faDiceTwo,
                        onPress: callbackTwo,
                    },
                ]}
            />,
        );

        const buttonTwo = getByTestId('button-budget-1');
        fireEvent.press(buttonTwo);
        await wait(() => expect(callbackTwo).toBeCalled());

        const buttonOne = getByTestId('button-budget-0');
        fireEvent.press(buttonOne);
        await wait(() => expect(callbackOne).toBeCalled());
    });
});
