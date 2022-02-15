import { useRef, useState } from 'react';
import Image from 'next/image';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import styles from './LanLive.module.scss';
function LanLive() {
  const prameSrc = 'https://ddangkongschool.com/026a4055ef859613770f9a31630df190.png';
  return (
    <div className={styles.lanLive}>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <div {...useScrollFadeIn('down', 1000, 1)} className={styles.title}>
            랜선 라이브 북클래스
          </div>
          <div {...useScrollFadeIn('down', 1000, 1)} className={styles.description}>
            친구들과 함께 그림 그리기, 퀴즈 풀기, 선생님과 대화하며 경험해요!
          </div>
        </div>

        <div className={styles.video}>
          <div className={styles.imgWrapper}>
            <Image alt={'test'} width={1118} height={880} src={prameSrc}></Image>
          </div>
          <div className={styles.videoWrapper}>
            <video autoPlay muted loop playsInline className={styles.videoPlayer}>
              <source type='video/mp4' src='https://ddks-front-dev.s3.ap-northeast-1.amazonaws.com/media/main_video.ccd1f367.mp4' className={styles.videoSource} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanLive;
