import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitch from './ThemeSwitch';

const meta = {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
