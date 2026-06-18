import React from 'react';
import { Shield, Clock, PieChart, Info } from 'lucide-react';
import styles from './ServiceOverview.module.css';

const ServiceOverview: React.FC = () => {
  return (
    <section className={styles.compactSection} id="overview">
      <div className="container">
        <div className="text-center fade-in-up">
          <span className={styles.badge}>더좋은라이프 x KB헬스케어 통합 케어 서비스</span>
          <h2 className="heading-2">10년(120개월) 든든한 헬스케어 보장</h2>
          <p className={`${styles.wideSubtitle} subtitle`}>
            단 1구좌(최대 10점)로 일상부터 중대질환까지, 프리미엄 의료 서비스를 자유롭게 조합하세요.
          </p>
        </div>

        <div className={styles.highlightCards}>
          <div className={styles.card}>
            <div className={styles.iconCircle}><Clock size={32} /></div>
            <h3>120개월 보장</h3>
            <p>계약일로부터 10년간 장기 헬스케어 혜택</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}><PieChart size={32} /></div>
            <h3>1구좌 당 최대 10점</h3>
            <p>1점/0.5점 단위의 자유로운 포인트 차감 서비스</p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.iconCircle}><Shield size={32} /></div>
            <h3>중대질환 안심 케어</h3>
            <p>암, 뇌혈관, 심혈관 질환 발병 시 집중 치료지원 제공</p>
          </div>
        </div>

        <div className={styles.noticeBox}>
          <div className={styles.noticeHeader}>
            <Info size={20} className={styles.noticeIcon} />
            <strong>서비스 이용 정책 요약</strong>
          </div>
          <ul className={styles.noticeList}>
            <li>일상 속 건강관리 서비스(건강상담, 검진예약 등)는 <strong>상시(포인트 차감 없음)</strong> 이용 가능합니다.</li>
            <li>간병인 지원(1점), 방문간호(1점), 환자이송(1점), 차량에스코트(0.5점) 등은 <strong>중대질환 발병 시 포인트 안에서 합산 이용</strong> 가능합니다.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
