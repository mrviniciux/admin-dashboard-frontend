import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta = {
  title: 'Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['linear', 'circular'] },
    msg: { control: 'text' },
    showRefresh: { control: 'boolean' },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circular: Story = {
  args: {
    type: 'circular',
    msg: '',
    showRefresh: false,
  },
};

export const Linear: Story = {
  args: {
    type: 'linear',
    msg: '',
    showRefresh: false,
  },
};

export const Fullscreen: Story = {
  args: {
    type: 'linear',
    msg: '',
    showRefresh: true,
    fullScreen: true,
  },
};
