import { useRef, useEffect, useCallback, useState, Children, type ReactNode } from 'react';
import './SwipeCarousel.css';

interface CardsPerView {
  mobile: number;
  tablet?: number;
  desktop?: number;
}

interface SwipeCarouselProps {
  children: ReactNode[];
  cardsPerView: CardsPerView;
  className?: string;
}

function getVisibleCount(cpv: CardsPerView): number {
  const w = window.innerWidth;
  if (w >= 1024 && cpv.desktop) return cpv.desktop;
  if (w >= 768 && cpv.tablet) return cpv.tablet;
  return cpv.mobile;
}

function SwipeCarousel({ children, cardsPerView, className }: SwipeCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isRepositioning = useRef(false);
  const pointerStartX = useRef(0);
  const didSwipe = useRef(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [showArrows, setShowArrows] = useState(true);

  const items = Children.toArray(children);
  const count = items.length;

  const visibleCount = getVisibleCount(cardsPerView);
  const cloneCount = Math.min(visibleCount, count);
  const infinite = count > visibleCount;

  // Build slides array with clones
  const slides: ReactNode[] = [];
  if (infinite) {
    for (let i = count - cloneCount; i < count; i++) slides.push(items[i]);
  }
  slides.push(...items);
  if (infinite) {
    for (let i = 0; i < cloneCount; i++) slides.push(items[i]);
  }

  // Calculate slide width from wrapper width
  const calcSlideWidth = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return 0;
    const cpv = getVisibleCount(cardsPerView);
    const gap = window.innerWidth >= 768 ? 16 : 12; // matches CSS gap
    const padding = 8; // 0.5rem left padding
    const available = wrapper.clientWidth - padding * 2;
    return (available - (cpv - 1) * gap) / cpv;
  }, [cardsPerView]);

  // Recalculate on resize
  useEffect(() => {
    const update = () => {
      const w = calcSlideWidth();
      setSlideWidth(w);
      setShowArrows(count > getVisibleCount(cardsPerView));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [calcSlideWidth, count, cardsPerView]);

  // Get the full step size (slide width + gap)
  const getStepSize = useCallback(() => {
    const gap = window.innerWidth >= 768 ? 16 : 12;
    return slideWidth + gap;
  }, [slideWidth]);

  // Scroll to first real slide on mount / when slideWidth changes
  useEffect(() => {
    if (!infinite || slideWidth === 0) return;
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = getStepSize() * cloneCount;
  }, [infinite, cloneCount, slideWidth, getStepSize]);

  // Handle infinite loop repositioning
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !infinite || slideWidth === 0) return;

    let debounceTimer: ReturnType<typeof setTimeout>;

    const handleScrollEnd = () => {
      if (isRepositioning.current) return;
      const step = getStepSize();
      if (step === 0) return;

      const scrollLeft = track.scrollLeft;
      const firstRealStart = step * cloneCount;
      const lastRealEnd = firstRealStart + step * count;

      if (scrollLeft < firstRealStart - step * 0.5) {
        isRepositioning.current = true;
        track.style.scrollSnapType = 'none';
        track.scrollLeft = scrollLeft + step * count;
        requestAnimationFrame(() => {
          track.style.scrollSnapType = 'x mandatory';
          isRepositioning.current = false;
        });
      } else if (scrollLeft >= lastRealEnd - step * 0.5) {
        isRepositioning.current = true;
        track.style.scrollSnapType = 'none';
        track.scrollLeft = scrollLeft - step * count;
        requestAnimationFrame(() => {
          track.style.scrollSnapType = 'x mandatory';
          isRepositioning.current = false;
        });
      }
    };

    const onScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleScrollEnd, 120);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      clearTimeout(debounceTimer);
    };
  }, [infinite, cloneCount, count, slideWidth, getStepSize]);

  // Swipe vs click detection
  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    didSwipe.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (Math.abs(e.clientX - pointerStartX.current) > 10) {
      didSwipe.current = true;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (didSwipe.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const scrollByOne = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * getStepSize(), behavior: 'smooth' });
  };

  return (
    <div ref={wrapperRef} className={"carousel" + (className ? " " + className : "")}>
      {showArrows && (
        <button
          className="carousel-arrow carousel-arrow--left"
          onClick={() => scrollByOne(-1)}
          aria-label="Previous"
        >
          {"\u2039"}
        </button>
      )}
      <div
        ref={trackRef}
        className="carousel-track"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onClickCapture={handleClick}
      >
        {slides.map((slide, i) => (
          <div className="carousel-slide" key={i} style={{ width: slideWidth > 0 ? slideWidth : undefined }}>
            {slide}
          </div>
        ))}
      </div>
      {showArrows && (
        <button
          className="carousel-arrow carousel-arrow--right"
          onClick={() => scrollByOne(1)}
          aria-label="Next"
        >
          {"\u203a"}
        </button>
      )}
    </div>
  );
}

export default SwipeCarousel;
