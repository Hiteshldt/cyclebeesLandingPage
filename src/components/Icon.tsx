import React from 'react';

/**
 * Outline icon set (Feather/Heroicons style, 24×24, 1.5–2px stroke) replacing
 * the emoji that used to stand in for icons.
 *
 * Emoji were a liability here: each vendor renders them differently, they are
 * announced verbatim by screen readers, they ignore brand colour, and they add
 * multi-codepoint sequences (👨‍🔧 is four codepoints) to the HTML. These draw
 * with `currentColor`, so a card sets its colour once and the icon follows.
 */

export type IconName =
  // services
  | 'chain'
  | 'brake'
  | 'gear'
  | 'tyre'
  | 'wheel'
  | 'battery'
  | 'calendar'
  | 'wrench'
  | 'sparkle'
  | 'siren'
  | 'droplet'
  // process / benefits
  | 'clock'
  | 'phone-app'
  | 'coffee'
  | 'pin'
  | 'card'
  | 'check-circle'
  | 'rupee'
  | 'star'
  | 'mechanic'
  | 'rocket'
  | 'shield'
  // brand values
  | 'trophy'
  | 'heart'
  | 'bulb'
  | 'leaf'
  | 'target'
  | 'telescope'
  | 'handshake'
  // contact
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'clock-outline'
  | 'bike'
  | 'google'
  | 'quote'
  | 'tag'
  | 'percent';

interface IconProps {
  name: IconName;
  className?: string;
  /**
   * Supply when the icon is the only carrier of meaning. Omit it (the default)
   * for icons sitting next to a text label, so screen readers skip them.
   */
  title?: string;
  strokeWidth?: number;
}

/** Paths are stroked, not filled, so one definition works on any background. */
const PATHS: Record<IconName, React.ReactNode> = {
  chain: (
    <>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.8 12.6 5.2a4 4 0 0 1 5.7 5.7l-1.6 1.6" />
      <path d="M13 17.2l-1.6 1.6a4 4 0 0 1-5.7-5.7l1.6-1.6" />
    </>
  ),
  // Disc rotor with the caliper pads clamping its upper-right rim.
  brake: (
    <>
      <circle cx="12" cy="12.6" r="7.6" />
      <circle cx="12" cy="12.6" r="2.6" />
      <path d="M15.6 5.4 18.4 8.2M17.4 3.6 20.2 6.4" />
    </>
  ),
  // A true cog — a plain circle with radiating lines reads as a sun at 20px.
  gear: (
    <>
      <path d="M12.2 2.4h-.4a1.9 1.9 0 0 0-1.9 1.9v.2a1.9 1.9 0 0 1-.95 1.64l-.4.24a1.9 1.9 0 0 1-1.9 0l-.15-.08a1.9 1.9 0 0 0-2.6.7l-.2.35a1.9 1.9 0 0 0 .7 2.6l.14.09a1.9 1.9 0 0 1 .95 1.63v.48a1.9 1.9 0 0 1-.95 1.65l-.14.09a1.9 1.9 0 0 0-.7 2.6l.2.35a1.9 1.9 0 0 0 2.6.7l.15-.08a1.9 1.9 0 0 1 1.9 0l.4.24a1.9 1.9 0 0 1 .95 1.64v.19a1.9 1.9 0 0 0 1.9 1.9h.4a1.9 1.9 0 0 0 1.9-1.9v-.19a1.9 1.9 0 0 1 .95-1.64l.4-.24a1.9 1.9 0 0 1 1.9 0l.15.08a1.9 1.9 0 0 0 2.6-.7l.2-.36a1.9 1.9 0 0 0-.7-2.59l-.14-.08a1.9 1.9 0 0 1-.95-1.65v-.47a1.9 1.9 0 0 1 .95-1.65l.14-.09a1.9 1.9 0 0 0 .7-2.59l-.2-.36a1.9 1.9 0 0 0-2.6-.7l-.15.08a1.9 1.9 0 0 1-1.9 0l-.4-.24a1.9 1.9 0 0 1-.95-1.64v-.2a1.9 1.9 0 0 0-1.9-1.89z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  // Tread band between two rims, so it does not collide with `wheel`.
  tyre: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M17.8 12h2.4M16.1 16.1l1.7 1.7M12 17.8v2.4M7.9 16.1l-1.7 1.7M6.2 12H3.8M7.9 7.9 6.2 6.2M12 6.2V3.8M16.1 7.9l1.7-1.7" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M12 3.2v7.2M12 13.6v7.2M3.2 12h7.2M13.6 12h7.2M6 6l4.4 4.4M13.6 13.6 18 18M18 6l-4.4 4.4M10.4 13.6 6 18" />
    </>
  ),
  battery: (
    <>
      <rect x="2.5" y="7.5" width="16" height="9" rx="2.2" />
      <path d="M21.5 11v2" />
      <path d="M11.5 9.5 8.8 13h3.4l-1.2 2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.2" />
      <path d="M3.5 10h17M8.5 3v4M15.5 3v4" />
      <path d="M8 14h3" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7-1.7 5.5-1.7-5.5L4.8 10.7 10.3 9z" />
      <path d="M18.5 16.5l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7z" />
    </>
  ),
  siren: (
    <>
      <path d="M6.5 18v-5a5.5 5.5 0 0 1 11 0v5" />
      <rect x="4" y="18" width="16" height="3.2" rx="1.2" />
      <path d="M12 3.2V5M4.6 6.6 5.9 7.9M19.4 6.6 18.1 7.9" />
    </>
  ),
  droplet: <path d="M12 3.2c3.4 3.6 5.6 6.3 5.6 9a5.6 5.6 0 1 1-11.2 0c0-2.7 2.2-5.4 5.6-9z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.6 2.2" />
    </>
  ),
  'clock-outline': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.6 2.2" />
    </>
  ),
  'phone-app': (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 5.6h3" />
      <circle cx="12" cy="18" r="1" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8.5h13v5.8a4.5 4.5 0 0 1-4.5 4.5h-4A4.5 4.5 0 0 1 4 14.3z" />
      <path d="M17 10h1.6a2.4 2.4 0 0 1 0 4.8H17" />
      <path d="M8 2.8v2.4M12 2.8v2.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10.3" r="2.6" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10.3" r="2.6" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.4" />
      <path d="M2.5 10h19" />
      <path d="M6.5 14.5h3" />
    </>
  ),
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.2 12.3 11 15l4.9-5.4" />
    </>
  ),
  rupee: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 7.5h5.6M9.2 10.4h5.6M13.4 7.5a2.9 2.9 0 0 1 0 5.8H9.2l5 5.2" />
    </>
  ),
  star: <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8z" />,
  mechanic: (
    <>
      <circle cx="10.5" cy="7.2" r="3.4" />
      <path d="M3.8 20.5a6.7 6.7 0 0 1 11.3-4.9" />
      <path d="M17 13.6a2.7 2.7 0 0 0 3.5 3.5l-2.4 2.4a1.6 1.6 0 0 1-2.2-2.2z" />
    </>
  ),
  rocket: (
    <>
      <path d="M12.5 3.2c3.4 1.7 5.6 5 5.9 8.8l-3.4 3.4H9.3l-3.4-3.4c.3-3.8 2.5-7.1 5.9-8.8z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M9.3 15.4 7 20.8l4.2-2.1M14.9 15.4l2.3 5.4-4.2-2.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 20 6v6c0 4.6-3.3 8-8 9.2C7.3 20 4 16.6 4 12V6z" />
      <path d="M9 12.2 11.3 14.5 15.4 10" />
    </>
  ),
  trophy: (
    <>
      <path d="M7.5 3.5h9v5.2a4.5 4.5 0 0 1-9 0z" />
      <path d="M7.5 5.2H4.8v1.4a3.2 3.2 0 0 0 2.9 3.2M16.5 5.2h2.7v1.4a3.2 3.2 0 0 1-2.9 3.2" />
      <path d="M12 13.2v3.6M8.6 20.5h6.8l-.8-3.7H9.4z" />
    </>
  ),
  heart: (
    <path d="M12 20.3 4.9 13.4a4.4 4.4 0 0 1 6.2-6.2l.9.9.9-.9a4.4 4.4 0 0 1 6.2 6.2z" />
  ),
  bulb: (
    <>
      <path d="M9 17a6 6 0 1 1 6 0v1.8H9z" />
      <path d="M9.8 21.4h4.4" />
    </>
  ),
  leaf: (
    <>
      <path d="M20.3 4.2C10.6 3.4 4.4 7.2 4.4 13.4a6.2 6.2 0 0 0 6.2 6.2c6.2 0 10-6.2 9.7-15.4z" />
      <path d="M4.8 20.4 12.4 12" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  telescope: (
    <>
      <path d="m3.3 13.8 12.4-7.2 2.6 4.5-12.4 7.2z" />
      <path d="m17.2 5.2 3.1 5.4" />
      <path d="M11 15.8 12.4 21M12.4 21H9.4M12.4 21h3" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11.5 3.6-3.6h4l2 1.8-2.4 2.2 4.4 4.2" />
      <path d="M21 11.5 17.4 7.9h-3.2" />
      <path d="m8.6 15.9 3 2.9M14.6 16.1l2 1.9" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h3.2l1.6 4-2 1.4a11.5 11.5 0 0 0 6.1 6.1l1.4-2 4 1.6v3.2a1.8 1.8 0 0 1-2 1.8A16.3 16.3 0 0 1 4.4 5.5a1.8 1.8 0 0 1 1.8-2z" />
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
      <path d="m3.6 7 8.4 6 8.4-6" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.6" cy="17" r="3.6" />
      <circle cx="18.4" cy="17" r="3.6" />
      <path d="M5.6 17 10 8.4h4.6L18.4 17M9 8.4h4.4M14.6 8.4l1.6-3.2h2" />
    </>
  ),
  google: (
    <path d="M21 12.2c0-.7-.06-1.2-.2-1.8H12v3.4h5.1a4.4 4.4 0 0 1-1.9 2.9v2.4h3.1c1.8-1.7 2.7-4.2 2.7-6.9zM12 21.5c2.4 0 4.5-.8 6-2.2l-3.1-2.4a5.6 5.6 0 0 1-8.3-2.9H3.4v2.5A9.5 9.5 0 0 0 12 21.5zM6.6 14a5.7 5.7 0 0 1 0-3.6V7.9H3.4a9.5 9.5 0 0 0 0 8.6zM12 6.3a5.1 5.1 0 0 1 3.6 1.4l2.7-2.7A9.1 9.1 0 0 0 12 2.5 9.5 9.5 0 0 0 3.4 7.9l3.2 2.5A5.7 5.7 0 0 1 12 6.3z" />
  ),
  quote: (
    <path d="M9.4 6.2c-3 1.3-4.6 3.7-4.6 7v4.6h5.6v-5.6H7.6c0-2 .8-3.4 2.6-4.3zM19.6 6.2c-3 1.3-4.6 3.7-4.6 7v4.6h5.6v-5.6h-2.8c0-2 .8-3.4 2.6-4.3z" />
  ),
  tag: (
    <>
      <path d="M11.2 3.2H20v8.8l-8.6 8.6a1.6 1.6 0 0 1-2.3 0L3 14.5a1.6 1.6 0 0 1 0-2.3z" />
      <circle cx="16.4" cy="7" r="1.4" />
    </>
  ),
  percent: (
    <>
      <path d="M6 18 18 6" />
      <circle cx="7.6" cy="7.6" r="2.6" />
      <circle cx="16.4" cy="16.4" r="2.6" />
    </>
  ),
};

/** Icons drawn as solid shapes rather than strokes. */
const FILLED: Partial<Record<IconName, boolean>> = {
  star: true,
  heart: true,
  google: true,
  quote: true,
  droplet: true,
};

const Icon: React.FC<IconProps> = ({
  name,
  className = 'w-6 h-6',
  title,
  strokeWidth = 1.6,
}) => {
  const isFilled = FILLED[name];

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={isFilled ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  );
};

export default Icon;
