import { useState, forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      clearable = false,
      className = '',
      value: externalValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState('');

    const isControlled = externalValue !== undefined;
    const currentValue = isControlled ? externalValue : internalValue;

    const isPassword = type === 'password';
    const showClear = clearable && currentValue && !props.disabled;

    const inputType = isPassword && showPassword ? 'text' : type;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
      <div className="relative w-full max-w-md">
        <input
          ref={ref}
          type={inputType}
          value={currentValue ?? ''}
          onChange={handleChange}
          className={`
            w-full rounded-lg border px-4 py-2.5 text-gray-900 
            placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200
            disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500
            ${isPassword || showClear ? 'pr-10' : 'pr-4'}
            ${className}
          `}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
            )}
            
            {showClear && isPassword ? (
  <button
            type="button"
            onClick={handleClear}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            <FiX size={18} />
          
          </button>
) : showClear && (
      <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            tabIndex={-1}
          >
            <FiX size={18} />
          </button>
)}
      </div>
    );
  }
);

Input.displayName = 'Input';