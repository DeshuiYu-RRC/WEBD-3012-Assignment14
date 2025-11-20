import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Default Button',
    backgroundColor: '#007bff',
    disabled: false,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Button',
    size: 'large',
  },
};

export const CustomColor: Story = {
  args: {
    text: 'Custom Color',
    backgroundColor: '#28a745',
  },
};
