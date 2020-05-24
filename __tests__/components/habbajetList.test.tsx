import React from 'react';
import renderer from 'react-test-renderer';
import {createTestState} from '../../app/state/testState';
import HabbajetList from '../../app/components/habbajetList';
import moment from 'moment';
import {render, fireEvent, wait} from '@testing-library/react-native';

describe('HabbajetList Component', () => {
    it('will create buttons out of an array of habbajets', () => {
        const habbajets = createTestState(30, 0, 0).habbajets;
        habbajets.forEach(habbajet => {
            habbajet.date = moment()
                .add(1, 'day')
                .toISOString();
        });
        const component = renderer.create(
            <HabbajetList habbajets={habbajets} onSelect={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will highlight habits with pending actions', () => {
        const habbajets = createTestState(30, 0, 0).habbajets;
        const component = renderer.create(
            <HabbajetList habbajets={habbajets} onSelect={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can handle an empty habbajet array', () => {
        const habbajets = createTestState(0, 0, 0).habbajets;
        const component = renderer.create(
            <HabbajetList habbajets={habbajets} onSelect={() => undefined} />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onSelect callback if a habbajet button is pressed', async () => {
        const habbajets = createTestState(3, 0, 0).habbajets;
        const onSelect = jest.fn();
        const {getByTestId} = render(
            <HabbajetList habbajets={habbajets} onSelect={onSelect} />,
        );

        const habbajetButton = getByTestId('button-habbajet-1');
        fireEvent.press(habbajetButton);
        await wait(() => expect(onSelect).toBeCalledWith(habbajets[1]));
    });
});
