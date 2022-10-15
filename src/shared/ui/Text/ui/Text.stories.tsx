import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Primary title',
    text: 'Primary text',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Dark title',
    text: 'Dark text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Error title',
    text: 'Error text',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Dark Error title',
    text: 'Dark Error text',
    theme: TextTheme.ERROR,
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Only Title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Only Title Dark',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Only Text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Only Text Dark',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
