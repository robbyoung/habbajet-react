import React from 'react';
import renderer from 'react-test-renderer';
import {createTestState} from '../../app/state/testState';
import HabbajetClaimer from '../../app/components/habbajetClaimer';
import {wait, fireEvent, render} from '@testing-library/react-native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('HabbajetClaimer Component', () => {
    it('renders a claim button with the habbajet value', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.toClaim = true;
        const component = renderer.create(
            <HabbajetClaimer habbajet={habbajet} onClaim={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('collapses unclaimable habbajets', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        const component = renderer.create(
            <HabbajetClaimer habbajet={habbajet} onClaim={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onClaim callback if the button is pressed', async () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.toClaim = true;
        const onClaim = jest.fn();
        const {getByTestId} = render(
            <HabbajetClaimer habbajet={habbajet} onClaim={onClaim} />,
        );

        const claimButton = getByTestId('button-claim');
        fireEvent.press(claimButton);
        await wait(() => expect(onClaim).toBeCalled());
    });
});
