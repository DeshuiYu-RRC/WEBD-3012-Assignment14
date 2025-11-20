import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing content',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x400',
    title: 'Disabled Hero',
    subtitle: 'This hero is disabled',
    disabled: true,
  },
};
