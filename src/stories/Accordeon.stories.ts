import {Accordeon} from "../components/Accordeon/Accordeon";
import {Meta, StoryObj} from "@storybook/react";
import {accText} from "../components/App/App";

const meta: Meta<typeof Accordeon> = {
    title: 'Accordeon',
    component: Accordeon,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Accordeon>;

export const Primary: Story = {
    args: {
        children: accText,
    },
};

export const Secondary: Story = {
    args: {
        children: "Some text........",
    },
};


