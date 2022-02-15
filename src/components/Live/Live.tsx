import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from '../Live/Live.module.scss';

function Live() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  //   {classNames({
  //                   [styles.itemList]: true,
  //                   [global.lg_hidden]: true,
  //                 })}
  // {scrollPosition > 1150 ? styles.titleAnimation : styles.title}
  return (
    <div className={styles.liveContainer}>
      <div className={styles.textContainer}>
        <div className={classNames({ [styles.title]: true, [scrollPosition > 2000 ? styles.titleAnimation : styles.title]: true })}>
          실시간 방송 형태로 제공되는 <br /> 신개념 책 읽기{' '}
        </div>
        <div className={classNames({ [styles.text]: true, [scrollPosition > 2000 ? styles.textAnimation : styles.text]: true })}>
          방송 중이라면 언제든 접속하세요. <br /> 수강신청, 수업예약 없이 편하게 수업참여가 가능해요.
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img src='/images/liveimg.png' alt='reading' className={styles.liveImg} />
      </div>
    </div>
  );
}
// data-aos="fade-down" data-aos-delay="2s" data-aos-duration="800"
// data-aos="fade-down" data-aos-delay="4s" data-aos-duration="1000"
// [scrollPosition < 2000 && scrollPosition >1601 ? styles.titleAnimationUp : styles.title]: true
// [scrollPosition < 2300 && scrollPosition >1700 ? styles.textAnimationUp : styles.text]: true

export default Live;
