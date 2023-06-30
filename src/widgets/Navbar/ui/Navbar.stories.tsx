import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/Navbar',
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

export const WithoutUser = Template.bind({});
WithoutUser.args = {};
WithoutUser.decorators = [StoreDecorator(stateWithoutUser)];

export const WithUser = Template.bind({});
WithUser.args = {};
WithUser.decorators = [StoreDecorator(stateWithUser)];
