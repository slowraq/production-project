import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    direction: 'row',
    children: (
        <>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const Between = Template.bind({});
Between.args = {
    justify: 'between',
    children: (
        <>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

