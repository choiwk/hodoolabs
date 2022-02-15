import styles from '../Slidebooks/SlideBooks.module.scss';
import ImageWrap from './ImageWrap';

function SlideBooks() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrap}>
        <div>
          <div className={styles.firstText}>
            입학 전 1000권 읽기!
            <br /> 땅콩스쿨로 도전해보세요.
          </div>
        </div>
        <div>
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
