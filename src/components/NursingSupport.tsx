import { UserPlus, Ambulance, Car, Check, PhoneCall, UserCircle, ClipboardCheck, CalendarClock, ShieldCheck, Activity } from 'lucide-react';
import styles from './NursingSupport.module.css';
import careStyles from './CareSupport.module.css';
import medicalStyles from './MedicalSupport.module.css';

const steps = [
  { num: '01', title: '콜센터 접수', icon: <PhoneCall size={24} />, desc: '전문 상담원 연결' },
  { num: '02', title: '전문가 배정', icon: <UserCircle size={24} />, desc: '간호사/매니저 배정' },
  { num: '03', title: '상태 확인', icon: <ClipboardCheck size={24} />, desc: '대상자 상태 사전 확인' },
  { num: '04', title: '일정 조율', icon: <CalendarClock size={24} />, desc: '방문/이송 일정 확정', highlightType: 'border' },
  { num: '05', title: '서비스 수행', icon: <ShieldCheck size={24} />, desc: '안전한 케어 및 이송', highlightType: 'solid' },
  { num: '06', title: '사후 확인', icon: <Activity size={24} />, desc: '만족도 및 사후 케어' }
];

const NursingSupport: React.FC = () => {
  return (
    <section className={`section-padding ${medicalStyles.section}`} id="nursing-support">
      <div className="container">
        
        <div className={medicalStyles.header} style={{ marginBottom: '3rem' }}>
          <h2 className="heading-2">방문간호 & 이동지원</h2>
          <div className={medicalStyles.badgeGroup}>
            <div className={styles.topNoticeBadge} style={{ width: 'auto' }}>
              <span className={styles.noticeLabel}>중대질환 발생 시</span>
              <span className={styles.noticeDesc}>암 / 뇌혈관 / 심혈관 질환 (본인 한정)</span>
            </div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          {/* Card 1 */}
          <div className={`${careStyles.serviceCard} ${careStyles.borderYellow}`}>
            <div className={careStyles.cardHeader}>
              <div className={`${careStyles.iconCircle} ${careStyles.yellowBg}`}><UserPlus size={24} /></div>
              <div className={careStyles.pointBadge}>1점</div>
            </div>
            
            <h3 className={styles.cardTitle}>방문간호 (병원동행)</h3>
            
            <ul className={styles.checkList}>
              <li><Check size={16} className={styles.grayCheck}/> 전문 간호사가 병원 동행</li>
              <li><Check size={16} className={styles.grayCheck}/> 접수부터 수납, 약 수령까지</li>
              <li><Check size={16} className={styles.grayCheck}/> 진료 내용 설명 및 정서 지원</li>
              <li><Check size={16} className={styles.grayCheck}/> 서비스는 진료 병원에서 만나면서 시작</li>
            </ul>
            
            <div className={styles.bottomNote}>⊘ 입/퇴원 제외</div>
          </div>

          {/* Card 2 */}
          <div className={`${careStyles.serviceCard} ${styles.borderBlue}`}>
            <div className={careStyles.cardHeader}>
              <div className={`${careStyles.iconCircle} ${styles.blueBg}`}><Ambulance size={24} /></div>
              <div className={careStyles.pointBadge}>1점</div>
            </div>
            
            <h3 className={styles.cardTitle}>환자이송 지원</h3>
            
            <ul className={styles.checkList}>
              <li><Check size={16} className={styles.grayCheck}/> 병원 간 안전한 이송 지원</li>
              <li><Check size={16} className={styles.grayCheck}/> 사설 구급차(앰뷸런스) 제공</li>
              <li><Check size={16} className={styles.grayCheck}/> <span>동일 거점지역 내 이동 가능 <small>(권역 외 이동은 불가)</small><br/><span className={styles.exampleText}>예) 서울대학교병원 &rsaquo; 삼성서울병원</span></span></li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={`${careStyles.serviceCard} ${styles.borderDark}`}>
            <div className={careStyles.cardHeader}>
              <div className={`${careStyles.iconCircle} ${styles.darkBg}`}><Car size={24} /></div>
              <div className={careStyles.pointBadge}>0.5점</div>
            </div>
            
            <h3 className={styles.cardTitle}>차량 에스코트</h3>
            
            <ul className={styles.checkList}>
              <li><Check size={16} className={styles.grayCheck}/> 편안한 병원 이동 지원</li>
              <li><Check size={16} className={styles.grayCheck}/> 프리미엄 블랙 차량 제공</li>
              <li><Check size={16} className={styles.grayCheck}/> <span>서울·경기 주요 거점 지역 및 동일 광역권 내 이동<br/><span className={styles.exampleText}>예) 서울역 &rsaquo; 강남 세브란스병원<br/>대구역 &rsaquo; 칠곡 경북대학교병원<br/>타 권역 간 이동(예: 부산 &rsaquo; 서울)은 불가</span></span></li>
            </ul>
          </div>
        </div>

        <div className={medicalStyles.infoBlock} style={{ marginTop: '3rem' }}>
          <div className={medicalStyles.features} style={{ padding: '2.5rem' }}>
            <h4 className={medicalStyles.blockTitle} style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2.5rem', color: 'var(--kb-gray-950)' }}>
              <span className={careStyles.processIcon}>🔄</span> 공통 이용 프로세스
            </h4>
            
            <div className={medicalStyles.unifiedProcessContainer}>
              {steps.map((step, idx) => (
                <div key={idx} className={medicalStyles.unifiedProcessItem}>
                  <div className={`${medicalStyles.unifiedIconSide} ${step.highlightType === 'solid' ? medicalStyles.unifiedHighlightIcon : ''}`}>
                    {step.icon}
                  </div>
                  <div className={medicalStyles.unifiedBoxSide} style={step.highlightType === 'border' ? {borderColor: 'var(--kb-yellow)'} : {}}>
                    <div className={medicalStyles.unifiedStepLabel}>{step.num}. {step.title}</div>
                    <div className={medicalStyles.unifiedStepDesc}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={medicalStyles.warnings} style={{ backgroundColor: '#FEF2F2', borderLeftColor: '#EF4444' }}>
            <h4 className={medicalStyles.blockTitle} style={{ color: '#EF4444' }}><span className={medicalStyles.alertIcon} style={{ backgroundColor: '#EF4444' }}>!</span> 이용 전 필독사항</h4>
            <ul className={medicalStyles.warningList} style={{ fontSize: '0.85rem' }}>
              <li>원활한 배정을 위해 <strong style={{color:'#EF4444'}}>최소 7일 전</strong> 콜센터 접수를 권장합니다.</li>
              <li>방문간호는 진료 동행만 가능하며, <strong>입·퇴원 및 수술</strong> 과정은 포함되지 않습니다.</li>
              <li>모든 서비스는 <strong>중대질환 발병 후</strong> 이용 가능합니다.</li>
              <li style={{color:'#EF4444', fontWeight:'bold', marginTop:'4px'}}>*서비스 이용은 1구좌당 최대 10점까지 합산 이용 가능합니다.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NursingSupport;
