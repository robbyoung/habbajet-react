import React from 'react';
import renderer from 'react-test-renderer';
import HabbajetDisplay from '../../app/components/habbajetDisplay';
import {createTestState} from '../../app/state/testState';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('HabbajetDisplay Component', () => {
    it('will hook various components up to a habbajet', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        const component = renderer.create(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={false}
                onSuccess={() => undefined}
                onFailure={() => undefined}
                onClaim={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will add a penalty warning for budget deficits', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        const component = renderer.create(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={true}
                onSuccess={() => undefined}
                onFailure={() => undefined}
                onClaim={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
