import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
const ratingBarClasses = cva(
  'flex items-center gap-1',
  {
    variants: {
      variant: {
        default: '',
        filled: '',
        outlined: '',
      },
      size: {
        small: 'gap-0.5',
        medium: 'gap-1',
        large: 'gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);
const starClasses = cva(
  'transition-all duration-200 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'w-5 h-5',
        filled: 'w-5 h-5',
        outlined: 'w-5 h-5',
      },
      size: {
        small: 'w-4 h-4',
        medium: 'w-5 h-5',
        large: 'w-6 h-6',
      },
      filled: {
        true: 'text-yellow-400',
        false: 'text-gray-300',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
      filled: false,
    },
  }
);
const RatingBar = ({
  layout_width,
  position,
  maxRating = 5,
  currentRating = 0,
  onRatingChange,
  readOnly = false,
  variant,
  size,
  className,
  ...props
}) => {
  const [rating, setRating] = useState(currentRating);
  const [hoverRating, setHoverRating] = useState(0);
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');
  const handleStarClick = (starIndex) => {
    if (readOnly) return;  
    const newRating = starIndex + 1;
    setRating(newRating);   
    if (typeof onRatingChange === 'function') {
      onRatingChange(newRating);
    }
  };
  const handleStarHover = (starIndex) => {
    if (readOnly) return;
    setHoverRating(starIndex + 1);
  };
const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };
const StarIcon = ({ filled }) => (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
);
  return (
    <div
      className={twMerge(
        ratingBarClasses({ variant, size }),
        optionalClasses,
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      {...props}>
      {Array.from({ length: maxRating }, (_, index) => {
        const isFilled = (hoverRating || rating) > index;  
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            disabled={readOnly}
            className={twMerge(
              starClasses({ 
                variant, 
                size, 
                filled: isFilled 
              }),
              readOnly ? 'cursor-default' : 'hover:scale-110'
            )}
            role="radio"
            aria-checked={rating > index}
            aria-label={`${index + 1} star${index + 1 !== 1 ? 's' : ''}`}>
            <StarIcon filled={isFilled} />
          </button>
        );
      })}
    </div>
  );
};
export default RatingBar;