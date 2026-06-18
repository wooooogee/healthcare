import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <div className={`fade-in-up ${styles.textContent}`}>
          <div className={`${styles.badge} ${styles.largeBadge}`}>KB LIFE & HEALTHCARE</div>
          <h1 className="heading-1">
            더좋은라이프와 함께하는<br/>
            <span className={styles.highlight}>건강한 미래 라이프케어</span>
          </h1>
          <p className="subtitle">
            일상의 작은 습관부터 전문 의료 지원 서비스까지,<br/>
            KB 헬스케어의 검증된 솔루션으로 당신의 내일을 더 건강하게 채워드립니다.
          </p>
          <div className={styles.btnGroup}>
            <a href="https://joeunlife.my.canva.site/signa" target="_blank" rel="noopener noreferrer" className="btn btn-primary">지금 서비스 가입하기</a>
            <a href="#medical-support" className="btn btn-secondary">서비스 상세 보기</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
