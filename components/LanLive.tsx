import styles from './LanLive.module.scss';
function LanLive() {
  return (
    <div className={styles.lanLive}>
      <div className={styles.contentWrapper}>
        <div className={styles.test}>
          <div className={styles.textWrapper}>
            <div className={styles.title} style={{ top: '0px', opacity: 1 }}>
              랜선 라이브 북클래스
            </div>
            <div className={styles.description} style={{ top: '0px', opacity: 1 }}>
              친구들과 함께 그림 그리기, 퀴즈 풀기, 선생님과 대화하며 경험해요!
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <img className={styles.img} src='https://ddangkongschool.com/026a4055ef859613770f9a31630df190.png'></img>
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
