import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'transparent';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-light',
  secondary: 'bg-gray-500',
  outline: 'bg-transparent border border-blue-500 text-blue-500',
  transparent: 'bg-transparent text-primary',
};

const sizeClasses: Record<ButtonSize, string> = {
  small: 'py-2 px-3 text-sm',
  medium: 'py-3 px-4 text-base',
  large: 'py-4 px-6 text-lg',
};

export default function Button({
  text,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  className = '',
  ...props
}: ButtonProps): React.ReactElement {
  const baseClasses = 'rounded-lg flex items-center justify-center font-bold';
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];
  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${className}`;

  return (
    <TouchableOpacity
      className={buttonClasses}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' || variant === 'secondary' ? 'white' : 'currentColor'}
        />
      ) : (
        <Text className="font-smed text-white text-lg text-center">{text}</Text>
      )}
    </TouchableOpacity>
  );
}