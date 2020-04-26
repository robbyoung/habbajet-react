import React from 'react';
import renderer from 'react-test-renderer';
import {createTestState} from '../../app/state/testState';
import HabbajetList from '../../app/components/habbajetList';
import moment from 'moment';

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
});
