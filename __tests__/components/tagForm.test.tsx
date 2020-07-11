import React from 'react';
import renderer from 'react-test-renderer';
import {createTestTagEditor} from '../../app/state/testState';
import {TagEditor} from '../../app/state';
import {render, fireEvent, wait} from '@testing-library/react-native';
import TagForm from '../../app/components/tagForm';
import {habbajetColors} from '../../app/colors';

jest.mock('react-native-navigation', () => ({
    Navigation: {},
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

function testFormSnapshot(state: TagEditor, deleteButton: boolean = false) {
    const component = renderer.create(
        <TagForm
            nameField={state.name}
            selectedColor={state.color}
            onUpdate={() => undefined}
            onSubmit={() => undefined}
            onDelete={deleteButton ? () => undefined : undefined}
        />,
    );
    expect(component.toJSON()).toMatchSnapshot();
}

async function testFormUpdate(testID: string, fieldName: string) {
    const state = createTestTagEditor('', true);
    const onUpdate = jest.fn();
    const {getByTestId} = render(
        <TagForm
            nameField={state.name}
            selectedColor={habbajetColors[0]}
            onUpdate={onUpdate}
            onSubmit={() => {
                throw new Error('onSubmit not expected');
            }}
        />,
    );

    const field = getByTestId(testID);
    fireEvent.changeText(field, 'test input');
    await wait(() => expect(onUpdate).toBeCalledWith(fieldName, 'test input'));
}

describe('Tag Form Component', () => {
    it('can render an empty tag form', () => {
        testFormSnapshot(createTestTagEditor('', false));
    });

    it('can render a filled-out form', () => {
        testFormSnapshot(createTestTagEditor('New Name', false));
    });

    it('can render a form with a delete button', () => {
        testFormSnapshot(createTestTagEditor('', false), true);
    });

    it('can render a form with invalid entries', () => {
        const state = createTestTagEditor('', true);
        state.name.errorMessage = 'Bad name';
        testFormSnapshot(state);
    });

    it('will run the onUpdate callback if the name field is changed', async () => {
        await testFormUpdate('input-Name', 'Name');
    });

    it('will run the onUpdate callback if a color is selected', async () => {
        const state = createTestTagEditor('', true);
        const onUpdate = jest.fn();
        const {getByTestId} = render(
            <TagForm
                nameField={state.name}
                selectedColor={state.color}
                onUpdate={onUpdate}
                onSubmit={() => {
                    throw new Error('onSubmit not expected');
                }}
            />,
        );

        const color = habbajetColors[2];
        const colorElement = getByTestId(`color-${color}`);
        fireEvent.press(colorElement);
        await wait(() => expect(onUpdate).toBeCalledWith('Color', color));
    });

    it('will run the onSubmit callback if the submit button is pressed', async () => {
        const state = createTestTagEditor('', true);
        const onSubmit = jest.fn();
        const {getByTestId} = render(
            <TagForm
                nameField={state.name}
                selectedColor={state.color}
                onUpdate={() => undefined}
                onSubmit={() => onSubmit()}
            />,
        );

        const newTagButton = getByTestId('button-submit');
        fireEvent.press(newTagButton);
        await wait(() => expect(onSubmit).toBeCalled());
    });

    it('will run the onDelete callback if the delete button is pressed', async () => {
        const state = createTestTagEditor('', true);
        const onDelete = jest.fn();
        const {getByTestId} = render(
            <TagForm
                nameField={state.name}
                selectedColor={state.color}
                onUpdate={() => undefined}
                onSubmit={() => undefined}
                onDelete={() => onDelete()}
            />,
        );

        const newTagButton = getByTestId('button-delete');
        fireEvent.press(newTagButton);
        await wait(() => expect(onDelete).toBeCalled());
    });
});
