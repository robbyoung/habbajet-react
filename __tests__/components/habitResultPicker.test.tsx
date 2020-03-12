import React from 'react';
import renderer from 'react-test-renderer';
import HabitResultPicker from '../../app/components/habitResultPicker';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

describe('HabitResultPicker Component', () => {
    it('renders buttons and the specified day of the week', () => {
        const component = renderer.create(
            <HabitResultPicker
                color="#000000"
                dayOfWeek={2}
                onFailure={() => undefined}
                onSuccess={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
