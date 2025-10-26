import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
const pagerIndicatorClasses = cva(
  'flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        default: '',
        dots: 'gap-1',
        lines: 'gap-2',
      },
      size: {
        small: 'gap-1',
        medium: 'gap-2',
        large: 'gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);
const indicatorClasses = cva(
  'transition-all duration-300 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'w-2 h-2 rounded-full',
        dots: 'w-2 h-2 rounded-full',
        lines: 'h-1 rounded-full',
      },
      active: {
        true: '',
        false: 'opacity-50',
      },
    },
    defaultVariants: {
      variant: 'default',
      active: false,
    },
  }
);
const PagerIndicator = ({
  border_border = "1px solid #9a9a9a",
  layout_width,
  position,
  totalPages = 5,
  currentPage = 0,
  onPageChange,
  variant,
  size,
  className,
  ...props
}) => {
  const [activePage, setActivePage] = useState(currentPage);
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');
  const handlePageClick = (pageIndex) => {
    setActivePage(pageIndex);
    if (typeof onPageChange === 'function') {
      onPageChange(pageIndex);
    }
  };
  const containerStyles = {
    border: border_border || '1px solid #9a9a9a',
  };
  return (
    <div
      style={containerStyles}
      className={twMerge(
        pagerIndicatorClasses({ variant, size }),
        optionalClasses,
        className
      )}
      role="tablist"
      aria-label="Page indicators"
      {...props}
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index)}
          className={twMerge(
            indicatorClasses({ 
              variant, 
              active: index === activePage 
            }),
            index === activePage 
              ? 'bg-[#9a9a9a] border-[#9a9a9a]' 
              : 'bg-transparent border-[#9a9a9a]',
            variant === 'lines' 
              ? (index === activePage ? 'w-8' : 'w-4')
              : ''
          )}
          style={{
            border: border_border || '1px solid #9a9a9a',
          }}
          role="tab"
          aria-selected={index === activePage}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
};
export default PagerIndicator;