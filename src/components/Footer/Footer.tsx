import styles from '../Footer/Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <h3>(주) 호두랩스</h3>
        <div className={styles.info}>
          <span>대표 : 김민우 | 사업자등록번호 : 431-88-01287 <a href='#' className='infoLink'>사업자 정보 조회</a></span>
          <span>서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)</span>
          <span>제주특별시 서귀포시 중정로 86, 304</span>
          <span>통신판매업 신고번호 : 2019-서울강남-00301호</span>
        </div>
        <span>© Hodoo Labs. ALL RIGHTS RESERVED</span>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.link}>
          <div className={styles.firstLink}>
            <a href='#'>고객센터</a>
            <a href='#'>채팅상담</a>
          </div>
          <div>
            <a href='#'>이용약관</a>
            <a href='#'>개인정보 처리방침</a>
            <a href='#'>환불정책</a>
          </div>
        </div>
        <div className={styles.social}>
          <a href='#'><img src='/images/sci1.png' /></a>
          <a href='#'><img src='/images/sci2.png' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;