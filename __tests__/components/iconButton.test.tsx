import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../../app/components/iconButton';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

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
});
