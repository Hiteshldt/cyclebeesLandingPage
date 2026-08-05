import { useCallback, useState } from 'react';

const MIN_SWIPE_DISTANCE = 50;

/**
 * Mobile carousel state shared by the home-page sections.
 *
 * Four components each carried their own copy of this — identical index maths
 * plus two of them repeating the touch-swipe handlers — so swipe support was
 * present in some sections and missing in others. One hook keeps the behaviour
 * uniform.
 */
export const useCarousel = (length: number) => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const next = useCallback(
    () => setIndex((prev) => (prev + 1) % length),
    [length]
  );
  const previous = useCallback(
    () => setIndex((prev) => (prev - 1 + length) % length),
    [length]
  );

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > MIN_SWIPE_DISTANCE) next();
    if (distance < -MIN_SWIPE_DISTANCE) previous();
  };

  return {
    index,
    setIndex,
    next,
    previous,
    /** Spread onto the swipeable element. */
    swipeHandlers: { onTouchStart, onTouchMove, onTouchEnd },
  };
};

export default useCarousel;
