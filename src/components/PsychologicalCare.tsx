import React from 'react';
import medicalStyles from './MedicalSupport.module.css';
import styles from './PsychologicalCare.module.css';
import { Phone, Users, CheckCircle, Headphones, FileText, UserCheck, MessageCircle, HeartHandshake } from 'lucide-react';

const PsychologicalCare: React.FC = () => {
  return (
    <section className={`section-padding ${medicalStyles.section}`} id="psychological-care">
      <div className="container">
        
        {/* Header Grid: Title/Desc (Left) & Badges (Right) */}
        <div className={medicalStyles.header} style={{ marginBottom: '4rem' }}>
          <div>
            <h2 className="heading-2" style={{lineHeight: '1.4'}}>심리상담 서비스</h2>
            <p className={styles.topDesc} style={{ textAlign: 'center' }}>
              전문 심리상담센터를 통해 전화 또는 대면 상담 서비스를 제공합니다. <br/>
              지속적인 치료를 위해 대면 상담료를 할인 지원합니다.
            </p>
          </div>
          
          <div className={medicalStyles.badgeGroup}>
            <div className={medicalStyles.topBadge}>
              <div className={`${medicalStyles.badgeIcon}`} style={{backgroundColor: '#EFF6FF', color: '#2563EB'}}><Phone size={20} /></div>
              <div className={medicalStyles.badgeText}>
                <span className={medicalStyles.badgeLabel}>심리 상담</span>
                <strong>0.5점(대면, 유선 중 선택 가능)</strong>
              </div>
            </div>
            <div className={medicalStyles.topBadge}>
              <div className={`${medicalStyles.badgeIcon}`} style={{backgroundColor: '#ECFDF5', color: '#059669'}}><Users size={20} /></div>
              <div className={medicalStyles.badgeText}>
                <span className={medicalStyles.badgeLabel}>대상 범위</span>
                <strong>본인 + 가족 1인</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Content: Small Image (Left) & Expert Box (Right) */}
        <div className={styles.contentWrapper}>
          <div className={styles.smallImageBox}>
            <img 
              src="/images/psy_care.jpg" 
              alt="심리상담 서비스" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          <div className={styles.expertBoxWrapper}>
            <div className={styles.expertBox}>
              <div className={styles.expertHeader}>
                <strong style={{color: '#D97706'}}>아래 전문가 자격을 갖춘 상담사가 상담을 진행합니다.</strong>
              </div>
              <ul className={styles.expertList}>
                <li>
                  <CheckCircle size={18} className={styles.orangeIcon}/> 
                  <span>ICF국제코치연맹이 인증하는 전문 코치 자격레벨,<br/>한국코치협회가 인증하는 전문 코치 자격 레벨 보유자</span>
                </li>
                <li>
                  <CheckCircle size={18} className={styles.orangeIcon}/> 
                  <span>ICF국제코치연맹(ICF/ICF Korea): PCC, MCC, ACC 등급</span>
                </li>
                <li>
                  <CheckCircle size={18} className={styles.orangeIcon}/> 
                  <span>한국코치협회(KCA): KSC, KPC, KAC 등급<br/><small>(※ KAC등급 코치의 경우 유료코칭 경력 3년 이상)</small></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Full Width: Process */}
        <div className={styles.processCard}>
          <h4 className={medicalStyles.blockTitle} style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '2.5rem', color: 'var(--kb-gray-950)'}}>상담 진행 프로세스</h4>
          
          <div className={medicalStyles.unifiedProcessContainer}>
            
            <div className={medicalStyles.unifiedProcessItem}>
              <div className={medicalStyles.unifiedIconSide}><Headphones size={28} /></div>
              <div className={medicalStyles.unifiedBoxSide}>
                <div className={medicalStyles.unifiedStepLabel}>01. 접수</div>
                <div className={medicalStyles.unifiedStepDesc}>헬스케어 콜센터 연결 상담 이슈 확인</div>
              </div>
            </div>

            <div className={medicalStyles.unifiedProcessItem}>
              <div className={medicalStyles.unifiedIconSide}><FileText size={28} /></div>
              <div className={medicalStyles.unifiedBoxSide}>
                <div className={medicalStyles.unifiedStepLabel}>02. 유형 확정</div>
                <div className={medicalStyles.unifiedStepDesc}>유선/대면 선호 방식 선택</div>
              </div>
            </div>

            <div className={medicalStyles.unifiedProcessItem}>
              <div className={medicalStyles.unifiedIconSide}><UserCheck size={28} /></div>
              <div className={medicalStyles.unifiedBoxSide}>
                <div className={medicalStyles.unifiedStepLabel}>03. 전문가 선택</div>
                <div className={medicalStyles.unifiedStepDesc}>아토머스 전담 상담사 매칭</div>
              </div>
            </div>

            <div className={medicalStyles.unifiedProcessItem}>
              <div className={`${medicalStyles.unifiedIconSide} ${medicalStyles.unifiedHighlightIcon}`}><MessageCircle size={28} /></div>
              <div className={medicalStyles.unifiedBoxSide} style={{borderColor: 'var(--kb-yellow)', alignItems: 'flex-start', padding: 'var(--spacing-4) var(--spacing-4)'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '2px', width: '100%'}}>
                  <div className={medicalStyles.unifiedStepLabel} style={{marginBottom: '4px'}}>04. 상담 진행</div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start'}}>
                    <span className={medicalStyles.badgeBlue} style={{marginLeft: 0}}>A. 심리 상담 (지원)</span>
                    <span className={medicalStyles.badgeGreen} style={{marginLeft: 0}}>B. 대면 상담료 할인가 (연계)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={medicalStyles.unifiedProcessItem}>
              <div className={medicalStyles.unifiedIconSide}><HeartHandshake size={28} /></div>
              <div className={medicalStyles.unifiedBoxSide}>
                <div className={medicalStyles.unifiedStepLabel}>05. 종료</div>
                <div className={medicalStyles.unifiedStepDesc}>만족도 확인 및 추가 지원 안내</div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default PsychologicalCare;
