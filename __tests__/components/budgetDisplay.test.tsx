import React from 'react';
import renderer from 'react-test-renderer';
import BudgetDisplay from '../../app/components/budgetDisplay';
import {render, fireEvent, wait} from '@testing-library/react-native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('Budget Display Component', () => {
    it('can render a budget display for the home screen', () => {
        const component = renderer.create(
            <BudgetDisplay budget="$56.43" onPress={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onPress callback if the button is pressed', async () => {
        const onPress = jest.fn();
        const {getByTestId} = render(
            <BudgetDisplay budget="$80.00" onPress={onPress} />,
        );

        const arrowButton = getByTestId('button-arrow');
        fireEvent.press(arrowButton);
        await wait(() => expect(onPress).toBeCalled());
    });
});
