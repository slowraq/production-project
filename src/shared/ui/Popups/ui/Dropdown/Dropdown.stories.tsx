import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '@/shared/ui/Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: '1',
        },
        {
            content: '2',
        },

        {
            content: '1',
        },
        {
            content: '3',
        },
    ],
};
