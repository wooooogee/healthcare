import React from 'react';
import styles from './MainServices.module.css';

const services = [
  {
    imageSrc: '/images/service_1.jpg',
    title: '전문의 1:1 건강상담',
    desc: <>전문 의료진 및 간호사와<br/>1:1 맞춤 건강상담</>
  },
  {
    imageSrc: '/images/service_2.jpg',
    title: '심리 케어 서비스',
    desc: <>마음 건강까지 돌보는<br/>전문 심리상담 및 검사 지원</>
  },
  {
    imageSrc: '/images/service_3.jpg',
    title: '전문 돌봄 서비스',
    desc: <>환자이송, 간병인, 가사도우미 등<br/>갑작스러운 질병에도 안심</>
  },
  {
    imageSrc: '/images/service_4.jpg',
    title: '건강 컨텐츠 제공',
    desc: <>시기, 이슈별 포커스에 맞춘<br/>건강 컨텐츠 제공</>
  },
  {
    imageSrc: '/images/service_5.jpg',
    title: '만성질환 비대면 관리',
    desc: <>고혈압,당뇨 등 전문 프로그램<br/>통한 꾸준한 관리 지원</>
  },
  {
    imageSrc: '/images/service_6.jpg',
    title: '건강검진 우대예약',
    desc: <>제휴 협력을 통한 건강검진 우대,<br/>맞춤형 건강검진 설계 및 검진</>
  }
];

const MainServices: React.FC = () => {
  return (
    <section className={`section-padding ${styles.section}`} id="services">
      <div className="container">
        <div className="text-center fade-in-up">
          <h2 className="heading-2">주요 서비스</h2>
          <p className="subtitle">일상 속 건강관리부터 전문 의료 서비스까지 당신의 건강을 끝까지 책임집니다.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className={styles.cardImage}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="' + styles.fallbackIcon + '"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg></div>';
                  }}
                />
              </div>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
