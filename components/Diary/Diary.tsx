import { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from '../Diary/Diary.module.scss';

function Diary() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
    // console.log(scrollPosition);
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <div className={styles.diaryContainer}>
      <div className={styles.textContainer}>
        <div className={classNames({[styles.title]:true, [scrollPosition > 3200 ? styles.titleAnimation : styles.title]: true })}>매일매일 
          <br /> 알아서 기록하는 독서 일기
        </div>
        <div  className={classNames({[styles.text]:true, [scrollPosition > 3200 ? styles.textAnimation : styles.text]: true })}>오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.
          <br /> 읽기만 해도 자동으로 기록되고, 공유도 가능해요.
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img src='/images/diaryimg.png' alt='reading' className={styles.diaryImg}/>
      </div>
    </div>
  )
}

// data-aos="fade-down" data-aos-delay="2s" data-aos-duration="800"
// data-aos="fade-down" data-aos-delay="4s" data-aos-duration="1000"

export default Diary;