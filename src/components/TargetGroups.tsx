import React from 'react';
import styles from './TargetGroups.module.css';

const TargetGroups: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="target">
      <div className="container">
        <h2 className="heading-2 text-center">이런 분들께 추천드려요</h2>
        <p className={`subtitle text-center ${styles.targetSub}`}>전문가와 함께 바쁜 일상 속에서도 전문 의료 서비스를 경험해보세요.</p>
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              {/* Using a placeholder gradient or dummy div for the image area since we don't have the explicit user image */}
              <div className={`${styles.imagePlaceholder} ${styles.imgFamily}`}></div>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.targetTitle}>3040 엄마아빠</h3>
              <p>바쁜 직장과 육아로 전화 한 통에 간편하게 본인과 가족 건강 관련 정확한 조언을 얻고 싶을 때</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <div className={`${styles.imagePlaceholder} ${styles.imgMiddle}`}></div>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.targetTitle}>4050 자녀</h3>
              <p>바쁜 일상 속 부모님 병원 동행이 어려워 진료 예약부터 케어, 환자 이송까지 한 번에 맡기고 싶을 때</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <div className={`${styles.imagePlaceholder} ${styles.imgSenior}`}></div>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.targetTitle}>회복기 집중케어 고객</h3>
              <p>수술·치료 후 전문 심리케어와 간병·가사 도우미 지원으로 편안한 회복에 집중하고 싶을 때</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetGroups;
