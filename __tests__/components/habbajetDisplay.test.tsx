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
                day={0}
                onSuccess={() => undefined}
                onFailure={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
