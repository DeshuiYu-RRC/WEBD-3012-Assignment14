import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/600x400?text=Hello+World',
    alt: 'Sample image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/600x400?text=Hello+World',
    alt: 'Disabled image',
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://placehold.co/600x400?text=Hello+World',
    alt: 'Rounded image',
    borderRadius: '50%',
  },
};
