import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../../app/components/iconButton';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {render, fireEvent, wait} from '@testing-library/react-native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('IconButton Component', () => {
    it('will render a button with a font-awesome icon', () => {
        const component = renderer.create(
            <IconButton
                icon={faCoffee}
                size={70}
                color="#036bfc"
                onPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onPress callback if the button is pressed', async () => {
        const onPress = jest.fn();
        const onLongPress = jest.fn();

        const {getByTestId} = render(
            <IconButton
                icon={faCoffee}
                size={70}
                color="#036bfc"
                testID="button-icon"
                onPress={onPress}
                onLongPress={onLongPress}
            />,
        );

        const button = getByTestId('button-icon');
        fireEvent.press(button);
        await wait(() => {
            expect(onPress).toBeCalledTimes(1);
            expect(onLongPress).toBeCalledTimes(0);
        });
    });

    it('will run the onLongPress callback if the button is long pressed', async () => {
        const onPress = jest.fn();
        const onLongPress = jest.fn();
        const {getByTestId} = render(
            <IconButton
                icon={faCoffee}
                size={70}
                color="#036bfc"
                testID="button-icon"
                onPress={onPress}
                onLongPress={onLongPress}
            />,
        );

        const arrowButton = getByTestId('button-icon');
        fireEvent.longPress(arrowButton);
        await wait(() => {
            expect(onPress).toBeCalledTimes(0);
            expect(onLongPress).toBeCalledTimes(1);
        });
    });
});
