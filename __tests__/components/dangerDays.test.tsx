import React from 'react';
import renderer, {act} from 'react-test-renderer';
import store from '../../app/store';
import DangerDays from '../../app/components/dangerDays';
import {loadStateAction} from '../../app/actions';
import {createTestState} from '../../app/state/testState';
import {Provider} from 'react-redux';

describe('DangerDays Component', () => {
    it("renders a display with the selected habbajet's danger days", () => {
        act(() => {
            const state = createTestState(3, 0, 0, 1);
            state.habbajets[1].dangerDays = [2, 3, 0, 3, 5, 9, 2];
            store.dispatch(loadStateAction(state));
        });

        const component = renderer.create(
            <Provider store={store}>
                <DangerDays />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a default display if the habajet has no danger day data', () => {
        act(() => {
            const state = createTestState(3, 0, 0, 1);
            store.dispatch(loadStateAction(state));
        });

        const component = renderer.create(
            <Provider store={store}>
                <DangerDays />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('returns an empty view if there is no selected habbajet', () => {
        act(() => {
            const state = createTestState(3, 0, 0);
            store.dispatch(loadStateAction(state));
        });

        const component = renderer.create(
            <Provider store={store}>
                <DangerDays />
            </Provider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
