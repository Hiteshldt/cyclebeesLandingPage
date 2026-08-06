import React from 'react';
import BrandMark from '@/components/BrandMark';

/**
 * Standard section header: an eyebrow label flanked by the brand mark, a
 * heading, and an optional lead paragraph.
 *
 * Section titles used to be `text-xl md:text-2xl` — barely larger than the card
 * titles beneath them, which flattened the page's hierarchy. This sets one
 * confident scale and repeats the logo down the page as a rhythm device.
 */
const SectionHeading: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'center' | 'left';
  tone?: 'dark' | 'light';
  /** Renders the title as an h1 for page heroes. */
  as?: 'h1' | 'h2';
  className?: string;
}> = ({
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'dark',
  as: Tag = 'h2',
  className = '',
}) => {
  const centred = align === 'center';
  const titleColour = tone === 'light' ? 'text-white' : 'text-secondary-100';
  const leadColour = tone === 'light' ? 'text-white/80' : 'text-secondary-600';
  const eyebrowColour =
    tone === 'light' ? 'text-primary' : 'text-secondary-600/80';

  return (
    <div
      className={`${centred ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <p
          className={`flex items-center gap-2 mb-3 ${centred ? 'justify-center' : ''}`}
        >
          <BrandMark className={`w-6 ${eyebrowColour}`} />
          <span
            className={`text-xs font-bold uppercase tracking-[0.14em] ${eyebrowColour}`}
          >
            {eyebrow}
          </span>
        </p>
      )}

      <Tag
        className={`font-bold leading-tight ${titleColour} ${
          Tag === 'h1'
            ? 'text-3xl md:text-5xl'
            : 'text-2xl md:text-[2rem]'
        }`}
      >
        {title}
      </Tag>

      {lead && (
        <p
          className={`mt-3 text-sm md:text-base leading-relaxed ${leadColour} ${
            centred ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
