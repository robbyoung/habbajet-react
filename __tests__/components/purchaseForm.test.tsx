import React from 'react';
import renderer from 'react-test-renderer';
import {
    createTestPurchaseEditor,
    createTestState,
} from '../../app/state/testState';
import {PurchaseEditor} from '../../app/state';
import {render, fireEvent, wait} from '@testing-library/react-native';
import PurchaseForm from '../../app/components/purchaseForm';

jest.mock('react-native-navigation', () => ({
    Navigation: {},
}));

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: '',
}));

function testFormSnapshot(state: PurchaseEditor) {
    const component = renderer.create(
        <PurchaseForm
            nameField={state.name}
            costField={state.cost}
            selectedTagId={state.tagId}
            tags={createTestState(0, 0, 0).tags}
            onNewTag={() => undefined}
            onUpdate={() => undefined}
            onSubmit={() => undefined}
        />,
    );
    expect(component.toJSON()).toMatchSnapshot();
}

async function testFormUpdate(testID: string, fieldName: string) {
    const state = createTestPurchaseEditor('', '-2.5', true);
    const onUpdate = jest.fn();
    const {getByTestId} = render(
        <PurchaseForm
            nameField={state.name}
            costField={state.cost}
            selectedTagId={state.tagId}
            tags={createTestState(0, 0, 0).tags}
            onNewTag={() => {
                throw new Error('onNewTag not expected');
            }}
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

describe('Purchase Form Component', () => {
    it('can render an empty purchase form', () => {
        testFormSnapshot(createTestPurchaseEditor('', '', false));
    });

    it('can render a filled-out form', () => {
        testFormSnapshot(createTestPurchaseEditor('New Name', '2.5', false));
    });

    it('can render a form with invalid entries', () => {
        const state = createTestPurchaseEditor('', '-2.5', true);
        state.name.errorMessage = 'Bad name';
        state.cost.errorMessage = 'Bad cost';
        testFormSnapshot(state);
    });

    it('will run the onUpdate callback if the name field is changed', async () => {
        await testFormUpdate('input-Name', 'Name');
    });

    it('will run the onUpdate callback if the cost field is changed', async () => {
        await testFormUpdate('input-Cost', 'Cost');
    });

    it('will run the onUpdate callback if a tag is selected', async () => {
        const state = createTestPurchaseEditor('', '-2.5', true);
        const tags = createTestState(0, 0, 0).tags;
        const onUpdate = jest.fn();
        const {getByTestId} = render(
            <PurchaseForm
                nameField={state.name}
                costField={state.cost}
                selectedTagId={state.tagId}
                tags={tags}
                onNewTag={() => {
                    throw new Error('onNewTag not expected');
                }}
                onUpdate={onUpdate}
                onSubmit={() => {
                    throw new Error('onSubmit not expected');
                }}
            />,
        );

        const tagToSelect = getByTestId(
            `${tags[0].name.replace(' ', '-')}-tag`,
        );
        fireEvent.press(tagToSelect);
        await wait(() => expect(onUpdate).toBeCalledWith('TagId', tags[0].id));
    });

    it('will run the onNewTag callback if the new tag button is pressed', async () => {
        const state = createTestPurchaseEditor('', '-2.5', true);
        const tags = createTestState(0, 0, 0).tags;
        const onNewTag = jest.fn();
        const {getByTestId} = render(
            <PurchaseForm
                nameField={state.name}
                costField={state.cost}
                selectedTagId={state.tagId}
                tags={tags}
                onNewTag={onNewTag}
                onUpdate={() => {
                    throw new Error('onUpdate not expected');
                }}
                onSubmit={() => {
                    throw new Error('onSubmit not expected');
                }}
            />,
        );

        const newTagButton = getByTestId('new-tag');
        fireEvent.press(newTagButton);
        await wait(() => expect(onNewTag).toBeCalled());
    });

    it('will run the onSubmit callback if the submit button is pressed', async () => {
        const state = createTestPurchaseEditor('', '-2.5', true);
        const tags = createTestState(0, 0, 0).tags;
        const onSubmit = jest.fn();
        const {getByTestId} = render(
            <PurchaseForm
                nameField={state.name}
                costField={state.cost}
                selectedTagId={state.tagId}
                tags={tags}
                onNewTag={() => {
                    throw new Error('onNewTag not expected');
                }}
                onUpdate={() => {
                    throw new Error('onUpdate not expected');
                }}
                onSubmit={() => onSubmit()}
            />,
        );

        const newTagButton = getByTestId('button-submit');
        fireEvent.press(newTagButton);
        await wait(() => expect(onSubmit).toBeCalled());
    });
});
