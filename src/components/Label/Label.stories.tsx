import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: 'Username', disabled: false },
};

export const Disabled: Story = {
  args: { text: 'Disabled Label', disabled: true },
};

export const Required: Story = {
  args: { text: 'Email', required: true },
};
