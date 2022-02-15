import styles from './LanLive.module.scss';
function LanLive() {
  return (
    <div className={styles.lanLive}>
      <div className={styles.textWrapper}>
        <div className={styles.title}>랜선 라이브 북클래스</div>
        <div className={styles.description}>친구들과 함께 그림 그리기, 퀴즈 풀기, 선생님과 대화하며 경험해요!</div>
      </div>
    </div>
  );
}

export default LanLive;
