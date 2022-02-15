import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './BookChoice.module.scss';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import RefCheck from './RefCheck';
interface Props {
  img: string;
  check: StaticImageData;
  delay: number;
}
function Book({ img, check, delay }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const visibleRef = useRef<HTMLDivElement>(null);

  const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
    const { current } = visibleRef;
    if (entry.isIntersecting && current) {
      setIsVisible(entry.isIntersecting);
    } else if (current && !entry.isIntersecting) {
      setIsVisible(entry.isIntersecting);
    }
  };

  useEffect(() => {
    console.log(isVisible);
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
    <>
      <div className={styles.itemWrapper} ref={visibleRef}>
        <RefCheck check={check} isVisible={isVisible} delay={delay}></RefCheck>

        <div className={styles.bookImg}>
          <Image width={'150'} height={'200'} src={img}></Image>
        </div>
      </div>
    </>
  );
}

export default Book;
