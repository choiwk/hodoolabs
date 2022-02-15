import Image from 'next/image';
import styles from './BookChoice.module.scss';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

interface Props {
  img: string;
  check: StaticImageData;
  delay: number;
}
function Book({ img, check, delay }: Props) {
  return (
    <>
      <div className={styles.itemWrapper}>
        <div className={styles.check} {...useScrollFadeIn('', 0, delay)}>
          <Image width={'150'} height={'100'} src={check}></Image>
        </div>
        <div className={styles.bookImg}>
          <Image width={'150'} height={'200'} src={img}></Image>
        </div>
      </div>
    </>
  );
}

export default Book;
