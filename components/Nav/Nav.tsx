import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Nav/Nav.module.scss';
import global from '../../styles/base/nomalize.module.scss';
import classNames from 'classnames';

import { CgShoppingCart } from 'react-icons/cg';
import { BsList } from 'react-icons/bs';

function Nav() {
  const tagList = [
    '도서구매',
    '장바구니',
    '|',
    '이용권 관리',
    '로그인/회원가입',
  ];

  const logoSrc = [
    'https://ddangkongschool.com/99fc850a76600cb2d4c58074a018c441.png',
    'https://ddangkongschool.com/b172e73e98d5343a915da6ce9ac4baff.png',
  ];

  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [fontColor, setFontColor] = useState<string>('');

  const scrollRef = useRef<HTMLElement | null>(null);

  const [imgColor, setImageColor] = useState<string>(logoSrc[0]);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const backgroundcolor = window.scrollY < 90 ? 'transparent' : 'white';

      if (backgroundcolor === 'white') {
        setBackgroundColor(backgroundcolor);
        setFontColor('black');
        setImageColor(logoSrc[1]);
      } else {
        setBackgroundColor(backgroundcolor);
        setFontColor('white');
        setImageColor(logoSrc[0]);
      }
    });
  });

  return (
    <>
      <nav
        className={styles.nav}
        ref={scrollRef}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className={styles.navContainer}>
          <div className={styles.gnbLeft}>
            <h1 className={styles.title}>
              <figure style={{ color: fontColor }}>
                <Image
                  src={imgColor}
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
          <div className={styles.gnbRight}>
            <ul className={styles.navList}>
              <li
                className={classNames({
                  [styles.itemList]: true,
                  [global.lg_hidden]: true,
                })}
              >
                <CgShoppingCart className={styles.itemIcon} color={fontColor} />
              </li>
              <li
                className={classNames({
                  [styles.itemList]: true,
                  [global.lg_hidden]: true,
                })}
              >
                <BsList className={styles.itemIcon} color={fontColor} />
              </li>
              {tagList.map((el, index) => (
                <li
                  className={classNames({
                    [styles.navListItem]: true,
                    [global.lg_only]: true,
                  })}
                  key={index}
                >
                  <Link href={'##'}>
                    <a style={{ color: fontColor }}>{el}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
