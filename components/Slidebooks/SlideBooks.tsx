import { useEffect, useState } from 'react';
import ImageWrap from './ImageWrap';
import classNames from 'classnames';
import styles from '../Slidebooks/SlideBooks.module.scss';

function SlideBooks() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <div className={styles.container}>
      <div className={styles.textWrap}>
        <div className={classNames({ [styles.title]: true, [scrollPosition > 4800 ? styles.titleAnimation : styles.title]: true })}>
          <div className={styles.firstText}>
            입학 전 1000권 읽기!
            <br /> 땅콩스쿨로 도전해보세요.
          </div>
        </div>
        <div className={classNames({ [styles.text]: true, [scrollPosition > 4800 ? styles.textAnimation : styles.text]: true })}>
          <div className={styles.secondText}>
            매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.
            <br />
            독서를 통해 배움의 즐거움을 알아가 보세요.
          </div>
        </div>
      </div>
      <div className={styles.slideContainer}>
        <div className={styles.slideWrap}>
          <div className={styles.imageSlider}>
            <ImageWrap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideBooks;
