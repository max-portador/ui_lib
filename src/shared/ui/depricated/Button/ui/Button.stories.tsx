import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { ButtonSize, ButtonTheme } from './Button';
import '@/app/styles/index.scss';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div className="story-wrapper">
        <Button {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'ClearInverted',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'OutlineSizeL',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'OutlineSizeXL',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'BackgroundInverted',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    isSquare: true,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
