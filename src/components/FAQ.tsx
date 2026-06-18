import React from 'react';
import { Phone } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="faq">
      <div className="container">
        <div className={styles.faqBlock}>
          <h2 className="heading-2 text-center" style={{marginBottom: '3rem'}}>자주 묻는 질문 Best 5</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <div className={styles.q}>Q1. 가족도 서비스를 이용할 수 있나요?</div>
              <div className={styles.a}>네, 건강상담, 검진예약, 대형병원 진료예약, 심리상담은 최초 지정한 직계가족 1인(배우자, 부모, 자녀)도 이용 가능합니다.<br/><span className="text-sm text-gray-500">* 단, 중대질환 관련(방문간호, 간병인 등) 및 그 외 서비스는 본인만 가능합니다.</span></div>
            </div>
            
            <div className={styles.faqItem}>
              <div className={styles.q}>Q2. 추가 비용이 발생하나요?</div>
              <div className={styles.a}>건강검진 비용(우대가 적용)과 심리상담 대면 상담료(우대가 적용)는 고객 부담입니다. 이외 서비스들은 무료로 제공되며, 제공된 횟수/포인트를 초과할 경우 서비스가 제한될 수 있습니다.</div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.q}>Q3. 지역 제한이 있나요?</div>
              <div className={styles.a}>기본적으로 전국 어디서나 이용 가능합니다. (제휴 병원 및 전국 네트워크 활용)<br/><span className="text-sm text-gray-500">* 단, 환자이송/차량에스코트는 동일 거점 지역 / 광역권 내 이동만 지원됩니다. 응급상황 및 도서지역은 서비스 지원이 어렵습니다.</span></div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.q}>Q4. 중대질환이 아니면 간병인 지원이 안 되나요?</div>
              <div className={styles.a}>네, 맞습니다. 간병인, 가사도우미, 방문간호, 환자이송, 차량에스코트는 중대질환(암/뇌/심) 발생 시에만 제공됩니다. (서비스 개시 3개월 후 발병한 경우에 한함)</div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.q}>Q5. 서비스 신청은 어떻게 하나요?</div>
              <div className={styles.a}>오케어 App 또는 헬스케어 콜센터(1660-1383)로 간편하게 접수하실 수 있습니다.<br/><span className="text-sm text-gray-500">* 중대질환 관련 서비스는 원활한 배정을 위해 최소 7일 전 예약을 권장드립니다.</span></div>
            </div>
          </div>
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h3>이용 문의 콜센터</h3>
            <div className={styles.bannerPhone}>
              <Phone size={28} className={styles.phoneIcon} />
              1660-1383
            </div>
            <p>(운영시간 : 평일 09:00 ~ 18:00 / 토,일,공휴일 휴무)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
