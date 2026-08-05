import React from 'react';

interface CarouselControlsA11y {
  /** Names the set being paged through, e.g. "benefits". Used in labels. */
  label: string;
}

interface CarouselControlsProps extends CarouselControlsA11y {
  count: number;
  index: number;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  /** Colour scheme for the surface the controls sit on. */
  tone?: 'dark' | 'light';
}

/**
 * Previous / dots / next control strip for the mobile carousels.
 *
 * The arrows used to be `‹` and `›` text glyphs inside unlabelled buttons,
 * which screen readers announce as "single left-pointing angle quotation mark".
 * These are real icons with real labels, and the dots expose which slide is
 * current instead of only looking different.
 */
const CarouselControls: React.FC<CarouselControlsProps> = ({
  count,
  index,
  onSelect,
  onPrevious,
  onNext,
  label,
  tone = 'dark',
}) => {
  const button =
    tone === 'light'
      ? 'bg-white/20 text-white hover:bg-white/30'
      : 'bg-secondary-100/10 text-secondary-100 hover:bg-secondary-100/20';
  const activeDot = tone === 'light' ? 'bg-primary' : 'bg-primary';
  const inactiveDot = tone === 'light' ? 'bg-white/40' : 'bg-secondary-300';

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={onPrevious}
        aria-label={`Previous ${label}`}
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-150 ${button}`}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m14.5 5-7 7 7 7" />
        </svg>
      </button>

      <div className="flex justify-center gap-2">
        {Array.from({ length: count }, (_, dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => onSelect(dot)}
            aria-label={`Go to ${label} ${dot + 1} of ${count}`}
            aria-current={dot === index ? 'true' : undefined}
            className={`h-2 rounded-full transition-all duration-200 ${
              dot === index ? `w-5 ${activeDot}` : `w-2 ${inactiveDot}`
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label={`Next ${label}`}
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-150 ${button}`}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m9.5 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;
