import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../../app/components/label';

describe('Label Component', () => {
    it('will render a label with a title and content', () => {
        const component = renderer.create(
            <Label title="Title" content="Content" color="#036bfc" />,
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
