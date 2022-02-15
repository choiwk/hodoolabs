import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import downloadticket from '../../assets/downloadticket.png';
import downloadticketvertical from '../../assets/downloadticketverical.png';
import logo from '../../assets/logo.png';
import styles from './Appdownload.module.scss';

function AppDownload() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width: 767px)' });
  useEffect(() => {
    if (mobile) setIsMobile(mobile);
  }, [mobile]);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <div className={styles.appDownloadContainer}>
      <div className={styles.contentContainer}>
        <div>
          <div className={styles.contentTitleWrapper}>
            <div className={classNames({ [styles.title]: true, [scrollPosition > 6450 ? styles.titleAnimation : styles.title]: true })}>
              <div className={styles.contentTitle}>지금 다운로드 받으세요!</div>
            </div>
          </div>
        </div>
        <div className={styles.downloadContainer}>
          <div className={styles.ticketImg}>
            {mobile ? <Image src={downloadticketvertical} alt='download-ticket-vertical' layout='fill' width={360} height={613} /> : <Image src={downloadticket} alt='download-ticket' layout='fill' />}
          </div>
          <div className={styles.leftTicketBox}>
            <div>
              <Image src={logo} alt='ddangkongschool-logo' width={155} height={50} />
            </div>
            <div className={styles.belowLogoWrap}>
              <div className={styles.belowLogoText}>
                책을 보는 <br /> 새로운 방법
              </div>
            </div>
            <div className={styles.lastTextWrap}>
              <div className={styles.lastText}>지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!</div>
            </div>
          </div>
          <div className={styles.rightTicketBox}>
            <div className={styles.aboveDownloadBtnWrap}>
              <div className={styles.aboveDownloadBtnText}>회원가입에 걸리는 시간 단 3초</div>
            </div>
            <div className={styles.downloadBtmWrap}>
              <div>
                <div className={styles.downloadBtn}>앱 다운로드 하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDownload;
