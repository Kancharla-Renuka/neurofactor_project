import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
const editTextClasses = cva(
  'border-0 outline-none focus:outline-none focus:ring-0 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        filled: 'bg-gray-50',
        outlined: 'border border-gray-300 focus:border-blue-500',
      },
      size: {
        small: 'text-sm px-2 py-1',
        medium: 'text-base px-3 py-2',
        large: 'text-lg px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);
const EditText = ({
  placeholder = "Email Address",
  text_font_size = "text-xs",
  text_font_family = "Plus Jakarta Sans",
  text_font_weight = "font-light",
  text_line_height = "leading-xs",
  text_letter_spacing = "5px",
  text_text_align = "left",
  text_text_transform = "uppercase",
  text_color = "text-text-muted",
  layout_align_self = "end",
  layout_width,
  padding,
  position,
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  type = "text",
  ...props
}) => {
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');
  const inputStyles = {
    fontSize: text_font_size === "text-xs" ? "14px" : text_font_size,
    fontFamily: text_font_family || 'Plus Jakarta Sans',
    fontWeight: text_font_weight === "font-light" ? "300" : text_font_weight,
    lineHeight: text_line_height === "leading-xs" ? "18px" : text_line_height,
    letterSpacing: text_letter_spacing || '5px',
    textAlign: text_text_align || 'left',
    textTransform: text_text_transform || 'uppercase',
    color: text_color === "text-text-muted" ? "#757575" : text_color,
    alignSelf: layout_align_self || 'end',
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}/>
  );
};

export default EditText;