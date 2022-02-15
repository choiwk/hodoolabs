import styles from './BookChoice.module.scss';
function BookChoice() {
  return (
    <div className={styles.BookChoiceWrapper}>
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>
          <div className={styles.text}>
            <div style={{ top: '0px', opacity: 1 }}>
              <div>
                <div className={styles.title} style={{ whiteSpace: 'pre-wrap' }}>
                  교육 전문가들이 선정한 도서
                </div>
              </div>
            </div>
            <div className={styles.description} style={{ top: '0px', opacity: 1 }}>
              <div>
                <div style={{ whiteSpace: 'pre-wrap' }}>호두랩스의 교육 전문가들이 교과 수록, 초등 필독 고서등 아동 교육에 적합한 도서를 직접 선정해요!</div>
              </div>
            </div>
          </div>
          <div className={styles.bookItems}>
            {' '}
            {/* 이부분은 컴포넌트 따로 구성해야함 */}
            <div className={styles.itemWrapper}>
              <div className={styles.check}>
                <img src='https://ddks-front.s3.ap-northeast-1.amazonaws.com/img/btn_check_1.9f65cadf.gif'></img>
              </div>
              <img className={styles.bookImg} src='https://ddangkongschool.com/809c653d9d31315cde24cebde96ac93c.png'></img>
            </div>
            <div className={styles.itemWrapper}>
              <div className={styles.check}>
                <img src='https://ddks-front.s3.ap-northeast-1.amazonaws.com/img/btn_check_2.1b1b52f8.gif'></img>
              </div>
              <img className={styles.bookImg} src='https://ddangkongschool.com/de8357effc9a8ccd14ef8084d2da3151.png'></img>
            </div>
            <div className={styles.itemWrapper}>
              <div className={styles.check}>
                <img src='https://ddks-front.s3.ap-northeast-1.amazonaws.com/img/btn_check_3.1c4da85d.gif'></img>
              </div>
              <img className={styles.bookImg} src='https://ddangkongschool.com/0ec8f9ee1870e03e41c87b22d94368cd.png'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookChoice;
