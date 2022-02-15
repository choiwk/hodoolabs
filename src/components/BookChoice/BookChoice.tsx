import Book from './Book';
import styles from './BookChoice.module.scss';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import check1 from '../../assets/check1.gif';
import check2 from '../../assets/check2.gif';
import check3 from '../../assets/check3.gif';
import Image from 'next/image';
function BookChoice() {
  const check = [check1, check2, check3];
  const book = [
    'https://ddangkongschool.com/809c653d9d31315cde24cebde96ac93c.png',
    'https://ddangkongschool.com/de8357effc9a8ccd14ef8084d2da3151.png',
    'https://ddangkongschool.com/0ec8f9ee1870e03e41c87b22d94368cd.png',
  ];
  const delay = [1, 400, 800];
  return (
    <div className={styles.BookChoiceWrapper}>
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>
          <div className={styles.text}>
            <div {...useScrollFadeIn('down', 1000, 0)}>
              <div>
                <div className={styles.title} style={{ whiteSpace: 'pre-wrap' }}>
                  교육 전문가들이 선정한 도서
                </div>
              </div>
            </div>
            <div {...useScrollFadeIn('down', 1000, 0)} className={styles.description}>
              <div>
                <div style={{ whiteSpace: 'pre-wrap' }}>호두랩스의 교육 전문가들이 교과 수록, 초등 필독 고서등, 아동 교육에 적합한 도서를 직접 선정해요!</div>
              </div>
            </div>
          </div>
          <div className={styles.bookItems}>
            {check.map((item, idx) => {
              return <Book key={idx} img={book[idx]} check={check[idx]} delay={delay[idx]}></Book>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookChoice;
