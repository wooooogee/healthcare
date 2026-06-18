import React from 'react';
import { Check, X, PhoneCall, FileSearch, ClipboardCheck, CalendarClock, ShieldCheck, ThumbsUp } from 'lucide-react';
import styles from './CareSupport.module.css';
import medicalStyles from './MedicalSupport.module.css';

const CareSupport: React.FC = () => {
  return (
    <section className={`section-padding ${medicalStyles.section}`} id="care-support">
      <div className="container">
        
        <div className={medicalStyles.header} style={{ marginBottom: '2rem' }}>
          <h2 className="heading-2">병원동행 및 이동 지원 서비스</h2>
          <div className={styles.topNoticeBadge}>
            <span className={styles.noticeLabel}>중대질환 발생 시</span>
            <span className={styles.noticeDesc}>암 / 뇌혈관 / 심혈관 질환 (본인 한정)</span>
          </div>
        </div>

        {/* Top Array: 2 Items */}
        <div className={styles.topGrid} style={{ marginBottom: 'var(--spacing-6)' }}>
          {/* Card 1 */}
          <div className={`${styles.serviceCard} ${styles.borderYellow}`}>
            <div className={styles.cardImageHero}>
              <img src="/images/care_1.jpg" alt="간병인 지원" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>간병인 지원</h3>
                <div className={styles.pointBadge}>1점</div>
              </div>
              <p className={styles.cardSub}>병원 입원 시 전문 간병인 파견</p>

              <div className={styles.timeBox}>
                <div className={styles.timeHeader}>
                  <strong>기준 시간</strong>
                  <strong>1회 = 24시간</strong>
                </div>
                <ul className={styles.timeDesc}>
                  <li>* 간병인 도착 시간부터 이용 시작 간주</li>
                  <li>* 이용 희망기간은 최소 3일이상 신청</li>
                </ul>
              </div>

              <div className={styles.listGrid}>
                <div>
                  <h4 className={styles.listTitle}>서비스 포함</h4>
                  <ul className={styles.checkList}>
                    <li><Check size={16} className={styles.greenIcon}/> 위생 관리</li>
                    <li><Check size={16} className={styles.greenIcon}/> 이동 보조</li>
                    <li><Check size={16} className={styles.greenIcon}/> 욕창 예방</li>
                    <li><Check size={16} className={styles.greenIcon}/> 식사/약 보조</li>
                  </ul>
                </div>
                <div>
                  <h4 className={styles.listTitle}>서비스 제외</h4>
                  <ul className={styles.checkList}>
                    <li><X size={16} className={styles.redIcon}/> <span>의료 행위 <small>(피딩, 석션, 꺾기 등)</small></span></li>
                    <li><X size={16} className={styles.redIcon}/> 주무름/안마</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.serviceCard} ${styles.borderGray}`}>
            <div className={styles.cardImageHero}>
              <img src="/images/care_2.jpg" alt="가사도우미 지원" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>가사도우미 지원</h3>
                <div className={styles.pointBadge}>1점</div>
              </div>
              <p className={styles.cardSub}>자택 요양 시 가사 활동 지원</p>

              <div className={styles.timeBox}>
                <div className={styles.timeHeader}>
                  <strong>기준 시간</strong>
                  <strong>1회 = 4시간</strong>
                </div>
                <ul className={styles.timeDesc}>
                  <li>* 평일 09~13시/14~18시 중 선택</li>
                </ul>
              </div>

              <div className={styles.listGrid}>
                <div>
                  <h4 className={styles.listTitle}>서비스 포함</h4>
                  <ul className={styles.checkList}>
                    <li><Check size={16} className={styles.greenIcon}/> <span>기본 청소 <small>(방, 거실, 화장실, 현관)</small></span></li>
                    <li><Check size={16} className={styles.greenIcon}/> 세탁 및 건조</li>
                    <li><Check size={16} className={styles.greenIcon}/> 설거지</li>
                  </ul>
                </div>
                <div>
                  <h4 className={styles.listTitle}>서비스 제외</h4>
                  <ul className={styles.checkList}>
                    <li><X size={16} className={styles.redIcon}/> <span>특수 청소 <small>(냉장고, 베란다, 창문)</small></span></li>
                    <li><X size={16} className={styles.redIcon}/> 음식 조리</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Array: 3 Items */}
        <div className={styles.bottomGrid}>
          {/* Card 3 */}
          <div className={`${styles.serviceCard} ${styles.borderYellow}`}>
            <div className={styles.cardImageHero}>
              <img src="/images/care_3.jpg" alt="방문간호" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>방문간호</h3>
                <div className={styles.pointBadge}>1점</div>
              </div>
              <p className={styles.cardSub}>전문 간호사 병원동행</p>
              
              <ul className={styles.checkListLight}>
                <li><Check size={16} className={styles.grayCheck}/> 전문 간호사가 병원 동행</li>
                <li><Check size={16} className={styles.grayCheck}/> 접수부터 수납, 약 수령까지</li>
                <li><Check size={16} className={styles.grayCheck}/> 진료 내용 설명 및 정서 지원</li>
                <li><Check size={16} className={styles.grayCheck}/> 서비스는 진료 병원에서 만나면서 시작</li>
              </ul>
              
              <div className={styles.bottomNote}>⊘ 입/퇴원 제외</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={`${styles.serviceCard} ${styles.borderBlue}`}>
            <div className={styles.cardImageHero}>
              <img src="/images/care_4.jpg" alt="환자이송 지원" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>환자이송 지원</h3>
                <div className={styles.pointBadge}>1점</div>
              </div>
              <p className={styles.cardSub}>사설 구급차로 안전하게 이송</p>
              
              <ul className={styles.checkListLight}>
                <li><Check size={16} className={styles.grayCheck}/> 병원 간 안전한 이송 지원</li>
                <li><Check size={16} className={styles.grayCheck}/> 사설 구급차(앰뷸런스) 제공</li>
                <li><Check size={16} className={styles.grayCheck}/> <span>동일 거점지역 내 이동 가능 <small>(권역 외 이동은 불가)</small><br/><span className={styles.exampleText}>예) 서울대학교병원 &rsaquo; 삼성서울병원</span></span></li>
              </ul>
            </div>
          </div>

          {/* Card 5 */}
          <div className={`${styles.serviceCard} ${styles.borderDark}`}>
            <div className={styles.cardImageHero}>
              <img src="/images/care_5.jpg" alt="차량 에스코트" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            
            <div className={styles.cardContent}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>차량 에스코트</h3>
                <div className={styles.pointBadge}>0.5점</div>
              </div>
              <p className={styles.cardSub}>프리미엄 블랙 차량 지원</p>
              
              <ul className={styles.checkListLight}>
                <li><Check size={16} className={styles.grayCheck}/> 편안한 병원 이동 지원</li>
                <li><Check size={16} className={styles.grayCheck}/> 프리미엄 블랙 차량 제공</li>
                <li><Check size={16} className={styles.grayCheck}/> <span>서울·경기 주요 거점 지역 및 동일 광역권 내 이동<br/><span className={styles.exampleText}>예) 서울역 &rsaquo; 강남 세브란스병원<br/>대구역 &rsaquo; 칠곡 경북대학교병원<br/>타 권역 간 이동(예: 부산 &rsaquo; 서울)은 불가</span></span></li>
              </ul>
            </div>
          </div>
        </div>


        <div className={medicalStyles.infoBlock} style={{ marginTop: '3rem' }}>
          <div className={medicalStyles.features} style={{ padding: '2.5rem' }}>
            <h4 className={medicalStyles.blockTitle} style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2.5rem', color: 'var(--kb-gray-950)' }}>
              <span className={styles.processIcon}>🔄</span> 공통 이용 프로세스
            </h4>
            
            <div className={medicalStyles.unifiedProcessContainer}>
              <div className={medicalStyles.unifiedProcessItem}>
                <div className={medicalStyles.unifiedIconSide}><PhoneCall size={24} /></div>
                <div className={medicalStyles.unifiedBoxSide}>
                  <div className={medicalStyles.unifiedStepLabel}>01. 콜센터 접수</div>
                  <div className={medicalStyles.unifiedStepDesc}>전문 상담원 연결</div>
                </div>
              </div>

              <div className={medicalStyles.unifiedProcessItem}>
                <div className={medicalStyles.unifiedIconSide}><FileSearch size={24} /></div>
                <div className={medicalStyles.unifiedBoxSide}>
                  <div className={medicalStyles.unifiedStepLabel}>02. 진단명 확인/배정</div>
                  <div className={medicalStyles.unifiedStepDesc}>서류 확인 및 배정</div>
                </div>
              </div>

              <div className={medicalStyles.unifiedProcessItem}>
                <div className={medicalStyles.unifiedIconSide}><ClipboardCheck size={24} /></div>
                <div className={medicalStyles.unifiedBoxSide}>
                  <div className={medicalStyles.unifiedStepLabel}>03. 상태 확인/배정</div>
                  <div className={medicalStyles.unifiedStepDesc}>대상자 가용성 확인</div>
                </div>
              </div>

              <div className={medicalStyles.unifiedProcessItem}>
                <div className={`${medicalStyles.unifiedIconSide} ${medicalStyles.unifiedHighlightIcon}`}><CalendarClock size={24} /></div>
                <div className={medicalStyles.unifiedBoxSide} style={{borderColor: 'var(--kb-yellow)'}}>
                  <div className={medicalStyles.unifiedStepLabel}>04. 일정 조율</div>
                  <div className={medicalStyles.unifiedStepDesc}>방문/이행 일정 확정</div>
                </div>
              </div>

              <div className={medicalStyles.unifiedProcessItem}>
                <div className={medicalStyles.unifiedIconSide}><ShieldCheck size={24} /></div>
                <div className={medicalStyles.unifiedBoxSide}>
                  <div className={medicalStyles.unifiedStepLabel}>05. 서비스 수행</div>
                  <div className={medicalStyles.unifiedStepDesc}>현장 전문 케어 이행</div>
                </div>
              </div>

              <div className={medicalStyles.unifiedProcessItem}>
                <div className={medicalStyles.unifiedIconSide}><ThumbsUp size={24} /></div>
                <div className={medicalStyles.unifiedBoxSide}>
                  <div className={medicalStyles.unifiedStepLabel}>06. 만족도 및 사후 확인</div>
                  <div className={medicalStyles.unifiedStepDesc}>서비스 품질 관리</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={medicalStyles.warnings} style={{ backgroundColor: '#FEF2F2', borderLeftColor: '#EF4444' }}>
            <h4 className={medicalStyles.blockTitle} style={{ color: '#EF4444' }}><span className={medicalStyles.alertIcon} style={{ backgroundColor: '#EF4444' }}>!</span> 이용 전 필독사항</h4>
            <ul className={medicalStyles.warningList} style={{ fontSize: '0.85rem' }}>
              <li>원활한 배정을 위해 <strong style={{color:'#EF4444'}}>최소 7일 전</strong> 콜센터 접수를 권장합니다.</li>
              <li>모든 서비스는 <strong>중대질환(암/뇌/심) 발병 후</strong>, <strong>본인만</strong> 이용 가능합니다. (중대질환 이외 목적은 불가)</li>
              <li>방문간호는 진료 동행만 가능하며, <strong>입·퇴원 및 수술</strong> 과정은 포함되지 않습니다.</li>
              <li style={{color:'#EF4444', fontWeight:'bold', marginTop:'4px'}}>*서비스 이용은 1구좌당 최대 10점까지 합산 이용 가능합니다.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareSupport;
