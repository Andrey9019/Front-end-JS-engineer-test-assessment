import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarMenu } from '../components/SidebarMenu/SidebarMenu';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';
import type { MenuItemProps } from '../components/SidebarMenu/MenuItem';

const meta = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const SidebarWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen ?? true);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-30 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
Open Menu
      </button>
      <SidebarMenu {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const oneLevelItems: MenuItemProps[] = [
  { label: 'Main', icon: <FiHome />, href: '#' },
  { label: 'Profile', icon: <FiUser />, href: '#' },
  { label: 'Settings', icon: <FiSettings />, href: '#' },
  { label: 'Logout', href: '#' },
];

const twoLevelItems: MenuItemProps[] = [
  { label: 'Main', icon: <FiHome />, href: '#' },
  {
    label: 'Profile',
    icon: <FiUser />,
    children: [
      { label: 'Personal Data ', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    label: 'Settings',
    icon: <FiSettings />,
    children: [
      { label: 'Theme', href: '#' },
      {
        label: 'Notifications',
        children: [
          { label: 'Email', href: '#' },
          { label: 'Push', href: '#' },
        ],
      },
    ],
  },
  { label: 'Logout', href: '#' },
];

export const OneLevel: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    menuItems: oneLevelItems,
    title: 'Menu 1 level',
    isOpen: true,
    onClose: () => {},
  },
};

export const TwoLevels: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    menuItems: twoLevelItems,
    title: 'Menu with nesting',
    isOpen: true,
    onClose: () => {},
  },
};

export const Closed: Story = {
  render: (args) => <SidebarWrapper {...args} />,
  args: {
    isOpen: false,
    menuItems: twoLevelItems,
    title: 'Closed menu',
    onClose: () => {},
  },
};
