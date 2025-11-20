import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'bold'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { text: 'This is default text', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'This is disabled text', disabled: true },
};

export const Large: Story = {
  args: { text: 'Large text', size: 'large', weight: 'bold' },
};
