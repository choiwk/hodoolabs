import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Nav/Nav.module.scss';
import global from '../../styles/base/nomalize.module.scss';
import classNames from 'classnames';
function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.gnb_left}>
            <h1 className={styles.title}>
              <figure>
                <Image
                  src={`https://ddangkongschool.com/99fc850a76600cb2d4c58074a018c441.png`}
                  alt="이미지 로고"
                  height={50}
                  width={154}
                />
                <figcaption className={global.visually_hidden}>
                  땅콩스쿨
                </figcaption>
              </figure>
            </h1>
          </div>
          <div className={styles.gnb_right}>
            <ul
              className={classNames({
                [styles.navList]: true,
                [global.lg_only]: true,
              })}
            >
              <li className={styles.navListItem}>
                <Link href={'/'}>
                  <a>도서구매</a>
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link href={'/'}>
                  <a>장바구니</a>
                </Link>
              </li>
              <li>
                <strong> &#124;</strong>
              </li>
              <li className={styles.navListItem}>
                <Link href={'/'}>
                  <a>이용권 관리</a>
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link href={'/'}>
                  <a>로그인/회원가입</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
