import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'value1',
    defaultValue: 'defaultValue',
    label: 'label',
    items: [
        {
            content: 'value1',
            value: 'value1',
        },
        {
            content: 'value2',
            value: 'value2',
        },

    ],
    onChange: (value: string) => console.log('onChange', value),
};
