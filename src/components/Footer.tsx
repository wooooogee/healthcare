import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.kb}>KB</span>헬스케어
          </div>
          <div className={styles.links}>
            <a href="#">이용약관</a>
            <a href="#" className={styles.bold}>개인정보처리방침</a>
            <a href="#">오케어 입점 안내</a>
            <a href="#">고객센터</a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.info}>
            <p>대표이사: 최낙천 | 서울특별시 강남구 테헤란로 123 (오케어앱타워)</p>
            <p>사업자등록번호: 123-45-67890 | 통신판매업신고: 제2023-서울강남-1234호</p>
            <p>고객센터: 1588-1234 (평일 09:00 - 18:00)</p>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} KB Healthcare Co.,Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
