import React from 'react';
import styles from '../Header/Header.module.scss';

import Image from 'next/image';
import Nav from '../Nav/Nav';
import global from '../../styles/base/nomalize.module.scss';

function Header() {
  return (
    <>
      <Nav />
      <header className={styles.headerContainer}>
        <section className={styles.headerSection}>
          <div className={styles.headerMessage}>
            <div className={styles.message}>
              <span>책 읽는 재미,</span>
            </div>
            <div className={styles.message}>
              <span>
                <strong>땅콩스쿨</strong>이
              </span>
            </div>
            <div className={styles.message}>
              <span>만들어줄게요!</span>
            </div>
          </div>
        </section>
        <div className={styles.effectContainer}>
          <figure>
            <Image
              className={styles.mouseLogo}
              src={
                'https://ddangkongschool.com/82fb322af4738d0bcf0dcf87834209a5.png'
              }
              alt="마우스 로고"
              height={72}
              width={72}
            />
            <figcaption className={global.visually_hidden}>
              스크롤 표시 안내
            </figcaption>
          </figure>
        </div>
      </header>
    </>
  );
}

export default Header;
