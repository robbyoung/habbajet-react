import React from 'react';
import renderer from 'react-test-renderer';
import HabitResultPicker from '../../app/components/habitResultPicker';
import {createTestState} from '../../app/state/testState';
import {render, fireEvent, wait} from '@testing-library/react-native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('HabitResultPicker Component', () => {
    it('renders buttons and the specified day of the week', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.date = '2020-03-21T20:44:24.967Z';
        const component = renderer.create(
            <HabitResultPicker
                habbajet={habbajet}
                onFailure={() => undefined}
                onSuccess={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('collapses for dates in the future', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.date = '3000-01-01T00:00:00.000Z';
        const component = renderer.create(
            <HabitResultPicker
                habbajet={habbajet}
                onFailure={() => undefined}
                onSuccess={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('collapses for habbajets that can be claimed', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.toClaim = true;
        const component = renderer.create(
            <HabitResultPicker
                habbajet={habbajet}
                onFailure={() => undefined}
                onSuccess={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onSuccess callback if the success button is pressed', async () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        const onSuccess = jest.fn();
        const {getByTestId} = render(
            <HabitResultPicker
                habbajet={habbajet}
                onFailure={() => undefined}
                onSuccess={onSuccess}
            />,
        );

        const button = getByTestId('button-success');
        fireEvent.press(button);
        await wait(() => expect(onSuccess).toBeCalled());
    });

    it('will run the onFailure callback if the failure button is pressed', async () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        const onFailure = jest.fn();
        const {getByTestId} = render(
            <HabitResultPicker
                habbajet={habbajet}
                onFailure={onFailure}
                onSuccess={() => undefined}
            />,
        );

        const button = getByTestId('button-failure');
        fireEvent.press(button);
        await wait(() => expect(onFailure).toBeCalled());
    });
});
