import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    title: { control: 'text' },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    elevation: { control: { type: 'range', min: 0, max: 10 } },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Welcome Card',
    content: 'This is a sample card component with some content.',
    disabled: false,
    elevation: 2,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is in disabled state.',
    disabled: true,
  },
};

export const HighElevation: Story = {
  args: {
    title: 'Elevated Card',
    content: 'This card has higher elevation.',
    elevation: 8,
  },
};
