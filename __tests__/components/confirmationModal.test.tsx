import React from 'react';
import renderer from 'react-test-renderer';
import ConfirmationModal from '../../app/components/confirmationModal';
import {render, fireEvent, wait} from '@testing-library/react-native';

const mockDismissModal = jest.fn();
jest.mock('react-native-navigation', () => ({
    Navigation: {
        dismissModal: (id: string) => mockDismissModal(id),
    },
}));

describe('Confirmation Modal Component', () => {
    it('can render a confirmation modal', () => {
        const component = renderer.create(
            <ConfirmationModal
                text="This is a confirmation modal"
                id="testId"
                onConfirm={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onConfirm callback if the yes button is pressed', async () => {
        const onConfirm = jest.fn();
        const {getByTestId} = render(
            <ConfirmationModal
                text="This is a confirmation modal"
                id="testId"
                onConfirm={onConfirm}
            />,
        );

        const row = getByTestId('button-yes');
        fireEvent.press(row);
        await wait(() => expect(onConfirm).toBeCalled());
    });

    it('will run Navigation.dismissModal if the no button is pressed', async () => {
        const {getByTestId} = render(
            <ConfirmationModal
                text="This is a confirmation modal"
                id="testId"
                onConfirm={() => undefined}
            />,
        );

        const button = getByTestId('button-no');
        fireEvent.press(button);
        await wait(() => expect(mockDismissModal).toBeCalledWith('testId'));
    });

    it('will run Navigation.dismissModal if the background is pressed', async () => {
        const {getByTestId} = render(
            <ConfirmationModal
                text="This is a confirmation modal"
                id="testId"
                onConfirm={() => undefined}
            />,
        );

        const button = getByTestId('modal-background');
        fireEvent.press(button);
        await wait(() => expect(mockDismissModal).toBeCalledWith('testId'));
    });
});
