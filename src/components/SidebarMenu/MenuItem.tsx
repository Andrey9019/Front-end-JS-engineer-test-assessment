import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface MenuItemProps {
    label: string;
    icon?: React.ReactNode;
    href?: string;
    children?: MenuItemProps[];
    onClick?: () => void;
}

export const MenuItem = ({ label, icon, href, children, onClick }: MenuItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = children && children.length > 0;

    const handleToggle = () => {
        if (hasChildren) {
            setIsOpen(!isOpen);
        } else if (onClick) {
            onClick();
        }
    }


    const content = (
        <div
      className={`
        flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer
        transition-colors duration-200 rounded-lg mx-2
        ${hasChildren ? 'justify-between' : ''}
      `}
      onClick={handleToggle}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="font-medium">{label}</span>
      </div>

      {hasChildren && (
        <FiChevronDown
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      )}
    </div>
  );

  return (
    <>
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}

      {hasChildren && isOpen && (
        <div className="pl-6 transition-all duration-300 ease-in-out">
          {children.map((child, index) => (
            <MenuItem key={index} {...child} />
          ))}
        </div>
      )}
    </>
    )
}