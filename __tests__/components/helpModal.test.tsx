import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, wait} from '@testing-library/react-native';
import HelpModal from '../../app/components/helpModal';

const mockDismissModal = jest.fn();
jest.mock('react-native-navigation', () => ({
    Navigation: {
        dismissModal: (id: string) => mockDismissModal(id),
    },
}));

describe('Help Modal Component', () => {
    it('can render a help modal', () => {
        const component = renderer.create(
            <HelpModal
                title="Title"
                content="This is some help text"
                id="testId"
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run Navigation.dismissModal if the ok button is pressed', async () => {
        const {getByTestId} = render(
            <HelpModal
                title="Title"
                content="This is some help text"
                id="testId"
            />,
        );

        const button = getByTestId('button-ok');
        fireEvent.press(button);
        await wait(() => expect(mockDismissModal).toBeCalledWith('testId'));
    });

    it('will run Navigation.dismissModal if the background is pressed', async () => {
        const {getByTestId} = render(
            <HelpModal
                title="Title"
                content="This is some help text"
                id="testId"
            />,
        );

        const button = getByTestId('modal-background');
        fireEvent.press(button);
        await wait(() => expect(mockDismissModal).toBeCalledWith('testId'));
    });
});
