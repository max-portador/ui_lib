import { Navbar } from 'widgets/Navbar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const stateWithUser = {
    user: {
        authData: {
            username: 'admin',
            id: '1',
        },
    },
};

const stateWithoutUser = {
    user: { authData: undefined as any },
};

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator(stateWithoutUser),
];

export const LightWithUser = Template.bind({});
LightWithUser.args = {};
LightWithUser.decorators = [StoreDecorator(stateWithUser)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(stateWithoutUser),
];

export const DarkWithUser = Template.bind({});
DarkWithUser.args = {};
DarkWithUser.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(stateWithUser),
];
