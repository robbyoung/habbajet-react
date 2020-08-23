import React from 'react';
import renderer from 'react-test-renderer';
import HabbajetDisplay from '../../app/components/habbajetDisplay';
import {createTestState} from '../../app/state/testState';
import {fireEvent, render, wait} from '@testing-library/react-native';

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
                onReset={() => undefined}
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
                onReset={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will show a multi-line habit description if one exists', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.description =
            'This is a habit description. It describes the habit in the display.';
        const component = renderer.create(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={false}
                onSuccess={() => undefined}
                onFailure={() => undefined}
                onClaim={() => undefined}
                onReset={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will show a reset button on non-Mondays', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.date = '2020-08-20T11:00:00.000Z';
        const component = renderer.create(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={true}
                onSuccess={() => undefined}
                onFailure={() => undefined}
                onClaim={() => undefined}
                onReset={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will show a reset button if the habbajet can be claimed', () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.toClaim = true;
        const component = renderer.create(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={true}
                onSuccess={() => undefined}
                onFailure={() => undefined}
                onClaim={() => undefined}
                onReset={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onSuccess callback if the success button is pressed', async () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        const onSuccess = jest.fn();
        const {getByTestId} = render(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={false}
                onSuccess={onSuccess}
                onFailure={() => undefined}
                onClaim={() => undefined}
                onReset={() => undefined}
            />,
        );

        const button = getByTestId('button-success');
        fireEvent.press(button);
        await wait(() => expect(onSuccess).toBeCalledTimes(1));
    });

    it('will run the onFailure callback if the failure button is pressed', async () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        const onFailure = jest.fn();
        const {getByTestId} = render(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={false}
                onSuccess={() => undefined}
                onFailure={onFailure}
                onClaim={() => undefined}
                onReset={() => undefined}
            />,
        );

        const button = getByTestId('button-failure');
        fireEvent.press(button);
        await wait(() => expect(onFailure).toBeCalledTimes(1));
    });

    it('will run the onClaim callback if the claim button is pressed', async () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.toClaim = true;
        const onClaim = jest.fn();
        const {getByTestId} = render(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={false}
                onSuccess={() => undefined}
                onFailure={() => undefined}
                onClaim={onClaim}
                onReset={() => undefined}
            />,
        );

        const button = getByTestId('button-claim');
        fireEvent.press(button);
        await wait(() => expect(onClaim).toBeCalledTimes(1));
    });

    it('will run the onReset callback if the reset button is pressed', async () => {
        const habbajet = createTestState(1, 0, 0).habbajets[0];
        habbajet.date = '2020-08-20T11:00:00.000Z';
        const onReset = jest.fn();
        const {getByTestId} = render(
            <HabbajetDisplay
                habbajet={habbajet}
                hasDeficit={false}
                onSuccess={() => undefined}
                onFailure={() => undefined}
                onClaim={() => undefined}
                onReset={onReset}
            />,
        );

        const button = getByTestId('button-reset');
        fireEvent.press(button);
        await wait(() => expect(onReset).toBeCalledTimes(1));
    });
});
