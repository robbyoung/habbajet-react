import React from 'react';
import renderer from 'react-test-renderer';
import WideButton from '../../app/components/wideButton';

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
});
