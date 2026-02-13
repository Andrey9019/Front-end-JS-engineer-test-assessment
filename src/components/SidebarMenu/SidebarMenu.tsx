import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { MenuItem, type MenuItemProps } from './MenuItem';

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItemProps[];
    title?: string;
}

export const SidebarMenu = ({ isOpen, onClose, menuItems, title = "Menu" }: SidebarMenuProps) => {

    useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);
    

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

    if (!isOpen) return null;
    return (
    <>

      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />


      <div
        className={`
          fixed top-0 right-0 h-full w-80  shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >

        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-600"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>


        <nav className="py-4 overflow-y-auto h-[calc(100%-4rem)]">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </nav>
      </div>
    </>
  );
}