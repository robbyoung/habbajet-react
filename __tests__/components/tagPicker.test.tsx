import React from 'react';
import renderer from 'react-test-renderer';
import TagPicker from '../../app/components/tagPicker';
import {createTestState} from '../../app/state/testState';
import {render, fireEvent, wait} from '@testing-library/react-native';

describe('TagPicker Component', () => {
    it('can render a tag picker', () => {
        const tags = createTestState(0, 0, 0).tags;
        const component = renderer.create(
            <TagPicker
                tags={tags}
                selected="0"
                onNewTag={() => undefined}
                onSelect={() => undefined}
                onLongPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a tag picker with no selected tag', () => {
        const tags = createTestState(0, 0, 0).tags;
        const component = renderer.create(
            <TagPicker
                tags={tags}
                selected=""
                onNewTag={() => undefined}
                onSelect={() => undefined}
                onLongPress={() => undefined}
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will run the onSelect callback if a tag is selected', async () => {
        const tags = createTestState(0, 0, 0).tags;
        const onSelect = jest.fn();
        const {getByTestId} = render(
            <TagPicker
                tags={tags}
                selected=""
                onSelect={onSelect}
                onNewTag={() => undefined}
                onLongPress={() => {
                    throw 'onLongPress Event Not Expected';
                }}
            />,
        );

        const tagToSelect = getByTestId(
            `${tags[0].name.replace(' ', '-')}-tag`,
        );
        fireEvent.press(tagToSelect);
        await wait(() => expect(onSelect).toBeCalledWith(tags[0].id));
    });

    it('will run the onLongPress callback if a tag is selected', async () => {
        const tags = createTestState(0, 0, 0).tags;
        const onLongPress = jest.fn();
        const {getByTestId} = render(
            <TagPicker
                tags={tags}
                selected=""
                onSelect={() => {
                    throw 'onSelect Event Not Expected';
                }}
                onNewTag={() => undefined}
                onLongPress={onLongPress}
            />,
        );

        const tagToSelect = getByTestId(
            `${tags[0].name.replace(' ', '-')}-tag`,
        );
        fireEvent.longPress(tagToSelect);
        await wait(() => expect(onLongPress).toBeCalledWith(tags[0].id));
    });

    it('will run the onNewTag callback if the new tag button is selected', async () => {
        const tags = createTestState(0, 0, 0).tags;
        const onCreate = jest.fn();
        const {getByTestId} = render(
            <TagPicker
                tags={tags}
                selected=""
                onSelect={() => undefined}
                onLongPress={() => undefined}
                onNewTag={onCreate}
            />,
        );

        const newTagButton = getByTestId('new-tag');
        fireEvent.press(newTagButton);
        await wait(() => expect(onCreate).toBeCalled());
    });
});
