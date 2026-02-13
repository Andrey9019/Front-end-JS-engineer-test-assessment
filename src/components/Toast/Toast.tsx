import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

export const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bgClasses = {
    success: 'bg-green-600 text-white border-green-700',
    error: 'bg-red-600 text-white border-red-700',
    info: 'bg-blue-600 text-white border-blue-700',
    warning: 'bg-amber-600 text-black border-amber-700',
  }[type];

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-3 px-5 py-3.5 rounded-lg shadow-xl border
        max-w-sm min-w-70
        transition-all duration-300 ease-out
        ${bgClasses}
        opacity-100 translate-y-0
      `}
      style={{
        animation: 'slideIn 0.3s ease-out forwards',
      }}
    >
      <div className="flex-1 text-sm font-medium">{message}</div>

      {onClose && (
        <button
          onClick={onClose}
          className="text-current opacity-80 hover:opacity-100 focus:outline-none"
          aria-label="close"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};
