import type { Meta, StoryObj } from '@storybook/react';
import Label from '../ui/Label';

const meta = {
  title: 'Example/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;


export const LabelStory: Story = {
  name: "label (working component)",
  args: {
    label: 'Hi, this component fully works.',
  },
};

export const LabelStory2: Story = {
  name: "label (non-working component)",
  args: {
    label: <span>random text</span>,
  },
};