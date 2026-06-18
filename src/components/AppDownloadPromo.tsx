import React from 'react';
import styles from './AppDownloadPromo.module.css';

const AppDownloadPromo: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="download">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="heading-2">
            지금 가장 완벽한 건강 파트너<br/>
            KB 오케어와 시작하세요!
          </h2>
          <p className="subtitle">
            앱 다운로드 후 간편 인증만으로 모든 혜택을 누릴 수 있습니다.
          </p>
          <div className={styles.stores}>
            <button className={styles.storeBtn}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
            </button>
            <button className={styles.storeBtn}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadPromo;
