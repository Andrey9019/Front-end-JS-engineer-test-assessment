import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    placeholder: 'Text input',
  },
};

export const PasswordWithToggle: Story = {
  args: {
    type: 'password',
    placeholder: '••••••••',
  },
};

export const ClearablePassword: Story = {
  args: {
    type: 'password',
    placeholder: 'Clearable password',
    clearable: true,
  }
}

export const ClearableText: Story = {
  args: {
    placeholder: 'ClearableText input',
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Number input',
  }
}

export const Disabled: Story = {
  args: {
    value: 'Disabled input',
    disabled: true,
  },
};