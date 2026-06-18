import React from 'react';
import { Smartphone, CheckSquare, Building, UserCheck, Flag, AlertCircle } from 'lucide-react';
import styles from './AppGuide.module.css';

const AppGuide: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="appguide">
      <div className="container">
        <h2 className="heading-2 text-center">오케어앱 가입 절차 안내</h2>
        <p className="subtitle text-center" style={{marginBottom: '3rem'}}>
          간편한 가입으로 헬스케어 서비스를 바로 시작해보세요.
        </p>

        <div className={styles.stepperContainer}>
          <div className={styles.step}>
            <div className={styles.iconCircle}><Smartphone size={28} /></div>
            <div className={styles.badge}>STEP 01</div>
            <h4>앱 실행 & 선택</h4>
            <p>'회원가입' 선택</p>
          </div>
          
          <div className={styles.connector}></div>

          <div className={styles.step}>
            <div className={styles.iconCircle}><CheckSquare size={28} /></div>
            <div className={styles.badge}>STEP 02</div>
            <h4>약관 동의</h4>
            <p>서비스 이용 동의</p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.step}>
            <div className={styles.iconCircle} style={{borderColor: 'var(--kb-yellow)'}}><Building size={28} /></div>
            <div className={`${styles.badge} ${styles.badgeActive}`}>STEP 03 (중요)</div>
            <h4>제휴사 선택<br/>(제휴코드:1097)</h4>
            <p>더좋은라이프 선택</p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.step}>
            <div className={styles.iconCircle}><UserCheck size={28} /></div>
            <div className={styles.badge}>STEP 04</div>
            <h4>본인 인증</h4>
            <p>휴대폰 번호 인증</p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.step}>
            <div className={`${styles.iconCircle} ${styles.iconActive}`}><Flag size={28} /></div>
            <div className={`${styles.badge} ${styles.badgeActive}`}>STEP 05</div>
            <h4>가입 완료</h4>
            <p>서비스 이용 시작</p>
          </div>
        </div>

        <div className={styles.alertBox}>
          <AlertCircle size={24} className={styles.alertIcon} />
          <div>
            <strong>꼭 확인해주세요!</strong>
            <p>제휴코드 입력 단계(STEP 03)에서 반드시 소속된 고객사(단체)명을 정확히 선택하셔야 헬스케어 서비스 혜택이 적용됩니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppGuide;
