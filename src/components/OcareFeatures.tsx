import React from 'react';
import { Activity, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import styles from './OcareFeatures.module.css';

const features = [
  {
    icon: <Activity size={32} />,
    title: '매일의 건강 미션',
    desc: '걷기, 물 마시기 등 식생활 습관을 개선하는 나만의 맞춤 미션'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: '건강검진 AI 리포트',
    desc: '어려운 검진 결과를 AI가 다각도로 분석하여 알기 쉽게 제공'
  },
  {
    icon: <HeartPulse size={32} />,
    title: '전문가 1:1 상담',
    desc: '간호사 등 전문 인력과 건강, 영양, 운동에 관한 실시간 상담 연결'
  },
  {
    icon: <Sparkles size={32} />,
    title: '스트레스 & 마음케어',
    desc: '비대면 심리 검사 및 명상 콘텐츠로 지친 마음을 다독이는 시간'
  }
];

const OcareFeatures: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="features">
      <div className="container">
        <div className="text-center fade-in-up">
          <h2 className="heading-2">오케어가 전하는 변화</h2>
          <p className="subtitle">건강 관리가 숙제가 아닌 일상 속 즐거움이 되도록</p>
        </div>
        
        <div className={styles.grid}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className="heading-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OcareFeatures;
