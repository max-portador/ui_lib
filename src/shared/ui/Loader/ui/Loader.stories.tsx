import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from '@/shared/ui/Loader';

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

export const Showcase = Template.bind({});
Showcase.args = {};
