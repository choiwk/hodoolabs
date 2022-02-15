import { useState, useEffect } from "react";
import styles from "./Compo.module.scss";
import Image from "next/image";
import classNames from "classnames";

export default function Compo() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    console.log(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div>
        <div className={position > 250 ? styles.img : styles.imghidden}>
          <Image alt='logo' src='/images/logo.png' width='94px' height='60px' />
        </div>
        <div className={position > 280 ? styles.title : styles.titlehidden}>
          <div>땅콩스쿨이란?</div>
        </div>
        <div
          className={position > 380 ? styles.subTitle : styles.subTitlehidden}
        >
          <div className={styles.sub}>
            <p>실시간(LIVE)으로, 아이들이 좋아하는</p>{" "}
            <p>캐릭터 선생님을 통해,</p>
          </div>
          <div className={styles.sub}>
            <p>친구들과 함께 창의독서, 퀴즈 등을</p>
            <p> 재미있게 즐길 수 있는 온라인 서비스입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
