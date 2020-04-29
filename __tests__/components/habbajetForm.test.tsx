import React from 'react';
import renderer from 'react-test-renderer';
import {habbajetColors} from '../../app/colors';
import HabbajetForm from '../../app/components/habbajetForm';
import {createTestEditor} from '../../app/state/testState';
import {HabbajetEditor} from '../../app/state';

function testForm(state: HabbajetEditor) {
    const component = renderer.create(
        <HabbajetForm
            nameField={state.name}
            valueField={state.value}
            modifierField={state.modifier}
            slackField={state.slack}
            selectedColor={habbajetColors[0]}
            onUpdate={() => undefined}
            onSubmit={() => undefined}
        />,
    );
    expect(component.toJSON()).toMatchSnapshot();
}

describe('ColorPicker Component', () => {
    it('can render an empty habbajet form', () => {
        testForm(createTestEditor('', '', ''));
    });

    it('can render a filled-out form', () => {
        testForm(createTestEditor('Name', '200', '10', '1'));
    });

    it('can render a form with invalid entries', () => {
        const state = createTestEditor('Name', '0', '10', '-1');
        state.value.errorMessage = 'Bad value';
        state.slack.errorMessage = 'Bad slack';
        testForm(state);
    });
});
