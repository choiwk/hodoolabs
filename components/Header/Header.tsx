import React from 'react';
import styles from '../Header/Header.module.scss';

import Nav from '../Nav/Nav';

function Header() {
  return (
    <>
      <Nav />
      <header className={styles.headerContainer}></header>
    </>
  );
}

export default Header;
