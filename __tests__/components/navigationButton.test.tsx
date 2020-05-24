import React from 'react';
import renderer from 'react-test-renderer';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {render, fireEvent, wait} from '@testing-library/react-native';
import NavigationButton from '../../app/components/navigationButton';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('NavigationIcon Component', () => {
    it('will render a navigation button with a font-awesome icon', () => {
        const component = renderer.create(
            <NavigationButton icon={faCoffee} onPress={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onPress callback if the button is pressed', async () => {
        const onPress = jest.fn();

        const {getByTestId} = render(
            <NavigationButton
                icon={faCoffee}
                testID="button-coffee"
                onPress={onPress}
            />,
        );

        const button = getByTestId('button-coffee');
        fireEvent.press(button);
        await wait(() => {
            expect(onPress).toBeCalledTimes(1);
        });
    });
});
