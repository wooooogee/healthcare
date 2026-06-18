import React from 'react';
import { Building2, Users, MapPin, UserPlus, CalendarClock, PhoneOutgoing, Stethoscope, FileText, Search, CalendarCheck, PhoneCall } from 'lucide-react';
import styles from './MedicalSupport.module.css';

const steps = [
  {
    num: '01',
    icon: <PhoneOutgoing size={24} />,
    title: '서비스 접수',
    desc: '헬스케어 콜센터 연결 (1660-1383)'
  },
  {
    num: '02',
    icon: <Stethoscope size={24} />,
    title: '전문가 상담',
    desc: '전문간호사 배정 질병 및 상태 확인'
  },
  {
    num: '03',
    icon: <FileText size={24} />,
    title: '서류 접수',
    desc: '진료의뢰서 제출 및 확인'
  },
  {
    num: '04',
    icon: <Search size={24} />,
    title: '병원 추천',
    desc: '협력센터 확인 후 최적 의료진 추천',
    highlightType: 'border'
  },
  {
    num: '05',
    icon: <CalendarCheck size={24} />,
    title: '예약 확정',
    desc: '대형병원 초진 예약 대행 완료',
    highlightType: 'solid'
  },
  {
    num: '06',
    icon: <PhoneCall size={24} />,
    title: '사후 관리',
    desc: '예약일시 안내 및 진료 후 안부콜'
  }
];

const MedicalSupport: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="medical-support">
      <div className="container">
        
        <div className={styles.header}>
          <h2 className="heading-2">대형병원 진료예약</h2>
          <div className={styles.badgeGroup}>
            <div className={styles.topBadge}>
              <div className={`${styles.badgeIcon} ${styles.yellowBg}`}><Building2 size={20} /></div>
              <div className={styles.badgeText}>
                <span className={styles.badgeLabel}>제휴 병원</span>
                <strong>전국 180여개</strong>
              </div>
            </div>
            <div className={styles.topBadge}>
              <div className={`${styles.badgeIcon} ${styles.grayBg}`}><Users size={20} /></div>
              <div className={styles.badgeText}>
                <span className={styles.badgeLabel}>대상 범위</span>
                <strong>본인 + 가족 1인</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.features}>
            <h4 className={styles.blockTitle}><span className={styles.checkIcon}>✔</span> 주요 특징</h4>
            <div className={styles.featureTags}>
              <div className={styles.tag}>
                <MapPin size={16} /> 전국 180여개 대형병원 제휴
              </div>
              <div className={styles.tag}>
                <UserPlus size={16} /> 복수 병원·의료진 추천
              </div>
              <div className={styles.tag}>
                <CalendarClock size={16} /> 초진 예약 대행
              </div>
            </div>
          </div>
          
          <div className={styles.warnings}>
            <h4 className={styles.blockTitle}><span className={styles.alertIcon}>!</span> 유의사항</h4>
            <ul className={styles.warningList}>
              <li><span className={styles.redText}>초진 예약</span>에 한해 제공됩니다.</li>
              <li>대형병원 내 <strong>치과</strong>는 서비스 불가합니다.</li>
            </ul>
          </div>
        </div>

        <div className={styles.stepSection}>
          <h3 className={styles.stepTitle}>이용 프로세스</h3>
          
          <div className={styles.unifiedProcessContainer}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.unifiedProcessItem}>
                <div className={`${styles.unifiedIconSide} ${step.highlightType === 'solid' ? styles.unifiedHighlightIcon : ''}`}>
                  {step.icon}
                </div>
                <div className={styles.unifiedBoxSide} style={step.highlightType === 'border' ? {borderColor: 'var(--kb-yellow)'} : {}}>
                  <div className={styles.unifiedStepLabel}>{step.num}. {step.title}</div>
                  <div className={styles.unifiedStepDesc}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MedicalSupport;
