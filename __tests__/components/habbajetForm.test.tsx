import React from 'react';
import renderer from 'react-test-renderer';
import {habbajetColors} from '../../app/colors';
import HabbajetForm from '../../app/components/habbajetForm';
import {createTestEditor} from '../../app/state/testState';
import {HabbajetEditor} from '../../app/state';
import {render, fireEvent, wait} from '@testing-library/react-native';

jest.mock('react-native-navigation', () => ({
    Navigation: {
        showModal: () => undefined,
    },
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

function testFormSnapshot(state: HabbajetEditor) {
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

async function testFormUpdate(testID: string, fieldName: string) {
    const state = createTestEditor('', '', '', '');
    const onUpdate = jest.fn();
    const {getByTestId} = render(
        <HabbajetForm
            nameField={state.name}
            valueField={state.value}
            modifierField={state.modifier}
            slackField={state.slack}
            selectedColor={habbajetColors[0]}
            onUpdate={onUpdate}
            onSubmit={() => undefined}
            onDelete={undefined}
        />,
    );

    const field = getByTestId(testID);
    fireEvent.changeText(field, 'test input');
    await wait(() => expect(onUpdate).toBeCalledWith(fieldName, 'test input'));
}

describe('Habbajet Form Component', () => {
    it('can render an empty habbajet form', () => {
        testFormSnapshot(createTestEditor('', '', ''));
    });

    it('can render a filled-out form', () => {
        testFormSnapshot(createTestEditor('Name', '200', '10', '1'));
    });

    it('can render a form with invalid entries', () => {
        const state = createTestEditor('Name', '0', '10', '-1');
        state.value.errorMessage = 'Bad value';
        state.slack.errorMessage = 'Bad slack';
        testFormSnapshot(state);
    });

    it('can render a delete button', () => {
        const state = createTestEditor('Name', '200', '10', '1');
        const component = renderer.create(
            <HabbajetForm
                nameField={state.name}
                valueField={state.value}
                modifierField={state.modifier}
                slackField={state.slack}
                selectedColor={habbajetColors[0]}
                onUpdate={() => undefined}
                onSubmit={() => undefined}
                onDelete={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onUpdate callback if the name field is changed', async () => {
        await testFormUpdate('input-Name', 'Name');
    });

    it('will run the onUpdate callback if the value field is changed', async () => {
        await testFormUpdate('input-Value', 'Value');
    });

    it('will run the onUpdate callback if the modifier field is changed', async () => {
        await testFormUpdate('input-Modifier', 'Modifier');
    });

    it('will run the onUpdate callback if the slack field is changed', async () => {
        await testFormUpdate('input-Slack-Days', 'Slack');
    });

    it('will run the onUpdate callback if a color is pressed', async () => {
        const state = createTestEditor('', '', '', '');
        const onUpdate = jest.fn();
        const {getByTestId} = render(
            <HabbajetForm
                nameField={state.name}
                valueField={state.value}
                modifierField={state.modifier}
                slackField={state.slack}
                selectedColor={habbajetColors[0]}
                onUpdate={onUpdate}
                onSubmit={() => undefined}
                onDelete={undefined}
            />,
        );

        const color = getByTestId(`color-${habbajetColors[1]}`);
        fireEvent.press(color, 'test input');
        await wait(() =>
            expect(onUpdate).toBeCalledWith('Color', habbajetColors[1]),
        );
    });

    it('will run the onSubmit callback if the submit is pressed', async () => {
        const state = createTestEditor('', '', '', '');
        const onSubmit = jest.fn();
        const {getByTestId} = render(
            <HabbajetForm
                nameField={state.name}
                valueField={state.value}
                modifierField={state.modifier}
                slackField={state.slack}
                selectedColor={habbajetColors[0]}
                onUpdate={() => undefined}
                onSubmit={onSubmit}
                onDelete={undefined}
            />,
        );

        const button = getByTestId('button-submit');
        fireEvent.press(button, 'test input');
        await wait(() => expect(onSubmit).toBeCalledTimes(1));
    });

    it('will run the onDelete callback if the submit is pressed', async () => {
        const state = createTestEditor('', '', '', '');
        const onDelete = jest.fn();
        const {getByTestId} = render(
            <HabbajetForm
                nameField={state.name}
                valueField={state.value}
                modifierField={state.modifier}
                slackField={state.slack}
                selectedColor={habbajetColors[0]}
                onUpdate={() => undefined}
                onSubmit={() => undefined}
                onDelete={onDelete}
            />,
        );

        const button = getByTestId('button-delete');
        fireEvent.press(button, 'test input');
        await wait(() => expect(onDelete).toBeCalledTimes(1));
    });
});
