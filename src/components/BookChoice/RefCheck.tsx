import { useEffect, useRef } from 'react';
import styles from './BookChoice.module.scss';
import Image from 'next/image';

interface Props {
  check: StaticImageData;
  isVisible: boolean;
  delay: number;
}
function RefCheck({ check, isVisible, delay }: Props) {
  const visibleRef = useRef<HTMLDivElement>(null);
  const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
    const { current } = visibleRef;
    if (entry.isIntersecting && current) {
      current.style.transitionProperty = 'all';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.opacity = '1';

      current.style.transitionDelay = `${delay}ms`;
    } else if (!entry.isIntersecting && current) {
      current.style.opacity = '0';
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (visibleRef.current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(visibleRef.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [isVisible]);
  return (
    <div className={styles.check} ref={visibleRef} style={{ opacity: '0' }}>
      <Image width={'150'} height={'100'} src={check}></Image>
    </div>
  );
}

export default RefCheck;
