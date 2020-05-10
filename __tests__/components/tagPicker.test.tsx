import React from 'react';
import renderer from 'react-test-renderer';
import TagPicker from '../../app/components/tagPicker';
import {createTestState} from '../../app/state/testState';

describe('TagPicker Component', () => {
    it('can render a tag picker', () => {
        const tags = createTestState(0, 0, 0).tags;
        const component = renderer.create(
            <TagPicker
                tags={tags}
                selected="0"
                onNewTag={() => undefined}
                onSelect={() => undefined}
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
            />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
