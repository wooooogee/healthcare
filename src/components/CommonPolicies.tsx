import React from 'react';
import { AlertTriangle, Users, HeartPulse } from 'lucide-react';
import styles from './CommonPolicies.module.css';

const CommonPolicies: React.FC = () => {
  return (
    <section className={styles.section} style={{ paddingTop: '2rem', paddingBottom: '2rem' }} id="policies">
      <div className="container">
        
        <div className={styles.grid}>
          {/* 중대질환 인정 범위 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <HeartPulse className={styles.icon} />
              <h3>중대질환 인정 범위</h3>
            </div>
            <div className={styles.cardBody}>
              <ul className={styles.diseaseList}>
                <li>
                  <strong>암 (Cancer)</strong>
                  <span>일반암 포함 (제외: 기타피부암, 제자리암, 갑상선암, 경계성 종양)</span>
                </li>
                <li>
                  <strong>심혈관질환</strong>
                  <span>급성 심근경색증, 후속 심근경색증 등</span>
                </li>
                <li>
                  <strong>뇌혈관질환</strong>
                  <span>거미막하출혈, 뇌내출혈, 기타 비외상성 두개내출혈</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 가족 서비스 범위 & 면책 기간 */}
          <div className={styles.sideCol}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <AlertTriangle className={styles.icon} />
                <h3>중대질환 서비스 제공 시기</h3>
              </div>
              <div className={`${styles.cardBody} ${styles.alertBg}`}>
                <p><strong>서비스 개시 3개월 후</strong> 중대질환이 발병한 고객에 한해 제공됩니다.</p>
                <p className={styles.smallNote}>※ 유예기간(3개월) 동안 동일한 상병명이 아닌 새로운 중대질환이 발병한 경우에는 서비스 제공 대상에 포함됩니다.</p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Users className={styles.icon} />
                <h3>가족 서비스 범위</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.smallNote} style={{marginBottom: '1rem'}}>* 최초 지정한 직계가족 1명 고정 (변경 불가)</p>
                <div className={styles.familyGrid}>
                  <div className={styles.allowed}>
                    <span>✔ 배우자</span>
                    <span>✔ 직계존속(부모)</span>
                    <span>✔ 직계비속(자녀)</span>
                  </div>
                  <div className={styles.denied}>
                    <span>✖ 형제/자매</span>
                    <span>✖ 조부모</span>
                    <span>✖ 손자녀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonPolicies;
