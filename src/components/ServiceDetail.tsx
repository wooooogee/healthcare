import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ServiceDetail.module.css';

const serviceData = [
  {
    category: "일상 속 헬스케어",
    description: "상시 건강관리 & 예방 (차감 포인트 없음)",
    items: [
      { name: "건강상담 & 정보", desc: "전문 의료진 및 간호사 1:1 맞춤 상담 (상시)", note: "가족 1인" },
      { name: "건강검진 우대", desc: "전국 검진기관 맞춤 예약 대행 및 최대 50% 우대 (상시)", note: "가족 1인" },
      { name: "만성질환관리", desc: "비만, 당뇨 등 12주(연 1회) / 8주(상시) 모바일 집중관리", note: "본인" },
      { name: "치매예방관리", desc: "앱 기반 스크리닝 및 위험군 판정, 맞춤 훈련 (상시)", note: "본인" },
      { name: "마이헬스/리워드", desc: "건강기록 연동, 걷기 챌린지 및 오케어몰 혜택 (상시)", note: "본인" }
    ]
  },
  {
    category: "아플 때 헬스케어",
    description: "진료 예약 & 이동 지원 (포인트 차감 적용)",
    items: [
      { name: "대형병원 진료예약", desc: "전국 180여개 제휴 거점병원 초진 예약 대행 (상시)", note: "본인/가족" },
      { name: "방문간호 (동행)", desc: "중대질환 발생 시 접수부터 진료 전 과정 간호사 병원 동행", note: "본인 (1점)" },
      { name: "환자이송 지원", desc: "중대질환 발생 시 동일 거점지역 내 사설 구급차 이송", note: "본인 (1점)" },
      { name: "차량에스코트", desc: "중대질환 발생 시 병원 간 차량 이동 에스코트 지원", note: "본인 (0.5점)" }
    ]
  },
  {
    category: "치료지원 헬스케어",
    description: "심리상담 & 간병/가사 (중대질환 시 포인트 차감)",
    items: [
      { name: "간병인 지원", desc: "병원 입원 시 전문 간병인 파견 (1회=24시간, 최소 3일 이상)", note: "본인 (1점)" },
      { name: "가사도우미 지원", desc: "자택 요양 시 기본 가사 활동 지원 (1회=4시간)", note: "본인 (1점)" },
      { name: "전문 심리상담", desc: "마인드카페 제휴 심리 전문가 유선/대면 상담 (중대질환 발생 시 제한 제공, 그 외 상시 우대료)", note: "본인 + 가족 1인 (0.5점)" }
    ]
  }
];

const ServiceDetail: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`} id="details">
      <div className="container">
        <div className="text-center fade-in-up">
          <h2 className="heading-2">서비스 구성</h2>
          <p className="subtitle">중대질환 전·후에 맞춘 단계별 상세 케어 구조를 열어보세요.</p>
        </div>

        <div className={styles.accordionContainer}>
          {serviceData.map((data, idx) => (
            <div key={idx} className={`${styles.accordionItem} ${openIndex === idx ? styles.active : ''}`}>
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(idx)}
              >
                <div>
                  <h3 className={styles.categoryTitle}>{data.category}</h3>
                  <p className={styles.categoryDesc}>{data.description}</p>
                </div>
                <div className={styles.icon}>
                  {openIndex === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              <div className={`${styles.accordionBody} ${openIndex === idx ? styles.open : ''}`}>
                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>서비스명</th>
                        <th>서비스 내용</th>
                        <th>적용 대상/점수</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.items.map((item, i) => (
                        <tr key={i}>
                          <td className={styles.nameCol}>{item.name}</td>
                          <td className={styles.descCol}>{item.desc}</td>
                          <td className={styles.noteCol}>{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
