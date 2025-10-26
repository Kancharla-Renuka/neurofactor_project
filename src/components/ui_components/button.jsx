import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);
const Button = ({
  text = "Order Now",
  text_font_size = "text-md",
  text_font_family = "Montserrat",
  text_font_weight = "font-medium",
  text_line_height = "leading-md",
  text_text_align = "left",
  text_text_transform = "capitalize",
  text_color = "text-text-lighter",
  border_border = "1px solid #9a9a9a",
  text_letter_spacing,
  fill_background_color,
  border_border_radius,
  effect_box_shadow,
  layout_gap,
  layout_width,
  padding,
  position,
  margin,
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  const hasValidLetterSpacing = text_letter_spacing && typeof text_letter_spacing === 'string' && text_letter_spacing?.trim() !== '';
  const hasValidBackgroundColor = fill_background_color && typeof fill_background_color === 'string' && fill_background_color?.trim() !== '';
  const hasValidBorderRadius = border_border_radius && typeof border_border_radius === 'string' && border_border_radius?.trim() !== '';
  const hasValidBoxShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const optionalClasses = [
    hasValidLetterSpacing ? `tracking-[${text_letter_spacing}]` : '',
    hasValidBackgroundColor ? `bg-[${fill_background_color}]` : '',
    hasValidBorderRadius ? `rounded-[${border_border_radius}]` : '',
    hasValidBoxShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');
  const buttonStyles = {
    fontSize: text_font_size === "text-md" ? "18px" : text_font_size,
    fontFamily: text_font_family || 'Montserrat',
    fontWeight: text_font_weight === "font-medium" ? "500" : text_font_weight,
    lineHeight: text_line_height === "leading-md" ? "22px" : text_line_height,
    textAlign: text_text_align || 'left',
    textTransform: text_text_transform || 'capitalize',
    color: text_color === "text-text-lighter" ? "#9a9a9a" : text_color,
    border: border_border || '1px solid #9a9a9a',
  };
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };
return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}>
      {children||text}
    </button>
  );
};
export default Button;