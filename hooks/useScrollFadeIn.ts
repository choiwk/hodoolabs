import { useCallback, useEffect, useRef } from 'react';

const useScrollFadeIn = (direction: string, duration: number, delay: number) => {
  const element = useRef<HTMLDivElement>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, -40px, 0)';
      case 'down':
        return 'translate3d(0, 40px, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}ms`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0px, 0)';
        current.style.transitionDelay = `${delay}ms`;
      } else if (current && !entry.isIntersecting) {
        current.style.transitionProperty = 'none';
        current.style.transitionDuration = 'none';
        current.style.transitionTimingFunction = 'none';
        current.style.opacity = '0';
        current.style.transform = 'translate3d(0, -40px, 0)';
        current.style.transitionDelay = `none`;
      }
    },
    [delay, duration]
  );
  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.5 });

      observer.observe(element.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [onScroll]);
  return { ref: element, style: { opacity: 0, transform: handleDirection(direction) } };
};

export default useScrollFadeIn;
