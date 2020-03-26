import React from 'react';
import renderer from 'react-test-renderer';
import {createTestState} from '../../app/state/testState';
import HabbajetClaimer from '../../app/components/habbajetClaimer';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('HabbajetClaimer Component', () => {
    it('renders buttons and the specified day of the week', () => {
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
});
