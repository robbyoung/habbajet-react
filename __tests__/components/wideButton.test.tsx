import React from 'react';
import renderer from 'react-test-renderer';
import WideButton from '../../app/components/wideButton';
import {render, fireEvent, wait} from '@testing-library/react-native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('WideButton Component', () => {
    it('will render a button with specified color and text', () => {
        const component = renderer.create(
            <WideButton
                text="Test Button"
                color="#C2A066"
                onPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render an extra circle to hightlight the button', () => {
        const component = renderer.create(
            <WideButton
                text="Test Button"
                color="#DDDDDD"
                highlight={true}
                onPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onPress callback if the button is pressed', async () => {
        const onPress = jest.fn();
        const {getByTestId} = render(
            <WideButton
                text="Button"
                testID="test-button"
                color="#ffffff"
                onPress={onPress}
            />,
        );

        const button = getByTestId('test-button');
        fireEvent.press(button);
        await wait(() => expect(onPress).toBeCalled());
    });

    it('will not run the onPress callback if the button is disabled', async () => {
        const onPress = jest.fn();
        const {getByTestId} = render(
            <WideButton
                disabled={true}
                text="Button"
                testID="test-button"
                color="#ffffff"
                onPress={onPress}
            />,
        );

        const button = getByTestId('test-button');
        fireEvent.press(button);
        await wait(() => expect(onPress).not.toBeCalled());
    });
});
