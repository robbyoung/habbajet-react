import React from 'react';
import renderer from 'react-test-renderer';
import BudgetDisplay from '../../app/components/budgetDisplay';

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
});
