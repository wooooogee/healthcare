import React from 'react';
import { Activity, Brain } from 'lucide-react';
import styles from './HealthPrograms.module.css';

const HealthPrograms: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="healthprograms">
      <div className="container">
        <div className="text-center fade-in-up" style={{ marginBottom: '4rem' }}>
          <h2 className="heading-2">집중건강관리</h2>
          <p className="subtitle">데이터 스크래핑 기반의 첨단 타겟팅으로 확실한 질환 예방 및 관리를 약속합니다.</p>
        </div>

        <div className={styles.grid}>
          {/* 만성질환관리 프로그램 */}
          <div className={styles.programCard}>
            <div className={styles.cardHeader}>
              <Activity size={32} className={styles.icon} />
              <h3>만성질환관리 솔루션</h3>
            </div>
            
            <div className={styles.imageContainer}>
              {/* 사용자가 이미지를 교체할 수 있도록 placeholder 세팅 */}
              <img 
                src="/images/chronic.png" 
                alt="만성질환관리 프로그램" 
                className={styles.responsiveImg} 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="placeholder-text">만성질환관리 이미지 (public/images/chronic.png) 필요</div>';
                }}
              />
            </div>
          </div>

          {/* 치매예방관리 프로그램 */}
          <div className={styles.programCard}>
            <div className={styles.cardHeader}>
              <Brain size={32} className={styles.icon} />
              <h3>치매예방관리 솔루션</h3>
            </div>

            <div className={styles.imageContainer}>
              <img src="/images/dementia.jpg" alt="치매예방관리 솔루션" className={styles.responsiveImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPrograms;
