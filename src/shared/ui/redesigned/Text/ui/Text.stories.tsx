import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';
import '@/app/styles/index.scss';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Showcase = Template.bind({});
Showcase.args = {
    title: 'Primary title',
    text: 'Primary text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Error title',
    text: 'Error text',
    variant: 'error',
};

export const Accent = Template.bind({});
Accent.args = {
    title: 'Error title',
    text: 'Error text',
    variant: 'accent',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Only Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Only Text',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Size S',
    text: 'Size S',
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Size M',
    text: 'Size M',
    size:'m',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Size L',
    text: 'Size L',
    size:'l',
};
