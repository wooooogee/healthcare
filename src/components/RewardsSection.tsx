import React from 'react';
import styles from './RewardsSection.module.css';

const RewardsSection: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="rewards">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="heading-2">
            걸을수록 쌓이는 리워드<br/>
            <span className={styles.highlight}>오케어몰</span>
          </h2>
          <p className="subtitle">
            스마트하게 건강을 챙기고 매일 받는 포인트로<br/>
            쇼핑까지 알뜰하게 즐기세요.
          </p>
          <ul className={styles.list}>
            <li>
              <div className={styles.circle}>1</div>
              <span>미션 달성 시 포인트 100% 지급</span>
            </li>
            <li>
              <div className={styles.circle}>2</div>
              <span>포인트로 프리미엄 영양제 교환</span>
            </li>
            <li>
              <div className={styles.circle}>3</div>
              <span>가족과 함께하는 랭킹 보너스</span>
            </li>
          </ul>
          <button className="btn btn-outline" style={{ marginTop: '2rem' }}>
            포인트 혜택 자세히 보기
          </button>
        </div>
        
        <div className={styles.imageWrapper}>
          {/* We will use a mockup image or a styled div here */}
          <img src="/app-mockup.png" alt="O'Care App Screenshot" className={styles.mockupImage} />
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
