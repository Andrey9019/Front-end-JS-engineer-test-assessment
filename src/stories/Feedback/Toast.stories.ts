import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../../components/Toast/Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
    duration: { control: { type: 'number', min: 0} },
    message: { control: 'text' },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
    duration: 2000,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong. Please try again.',
    duration: 2000,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning message.',
    duration: 2000,
  },
};


export const CloseInfo: Story = {
  args: {
    type: 'info',
    message: 'This is an info message. Click button to close.',
    duration: 0,
    onClose: () => alert('Toast closed!'),

    

  },
};