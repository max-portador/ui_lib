import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Loader } from '@/shared/ui/Loader';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => (
    <div className="story-wrapper">
        <Loader />
    </div>
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Purple = Template.bind({});
Purple.args = {};
Purple.decorators = [ThemeDecorator(Theme.PURPLE)];
