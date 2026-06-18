import React, { useState } from 'react';

import styles from './UseCases.module.css';

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checkup' | 'challenge'>('checkup');

  return (
    <section className={`section-padding ${styles.section}`} id="usecases">
      <div className="container">
        <div className="text-center fade-in-up" style={{ marginBottom: '3rem' }}>
          <h2 className="heading-2">오케어앱</h2>
          <p className="subtitle">오케어앱 앱 하나로 기업 건강검진부터 일상 미션까지 간편하게 관리하세요.</p>
        </div>

        <div className={styles.tabContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'checkup' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('checkup')}
            >
              오케어몰 이용 가이드
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'challenge' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('challenge')}
            >
              걷기 챌린지 & 리워드
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'checkup' && (
              <div className={`${styles.showcase} fade-in-up`}>

                <div className={styles.textContent}>
                  <h3 style={{color: 'var(--kb-yellow)', fontSize: '0.9rem', marginBottom: '0.5rem'}}>오케어몰 이용 가이드</h3>
                  <h4 style={{fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem'}}>포인트로 건강 챙기기</h4>
                  <p>데이터 연동 - 건강검진 결과와 일상 헬스 데이터 결합 분석</p>
                  
                  <ul className={styles.stepList}>
                    <li>
                      <div className={styles.stepNum}>1</div>
                      <div className={styles.stepText}>
                        <strong>포인트 확인 및 사용</strong>
                        <span>• '마이헬스' 또는 '스토어' 탭에서 보유한 POINT를 확인하세요.</span>
                        <span>• 쇼핑 시 결제 단계에서 포인트를 현금처럼 사용할 수 있습니다.</span>
                      </div>
                    </li>
                    <li>
                      <div className={styles.stepNum}>2</div>
                      <div className={styles.stepText}>
                        <strong>다양한 카테고리 쇼핑</strong>
                        <span>• 건강/건강기능식품: 나에게 필요한 영양제를 맞춤 추천 받아보세요.</span>
                        <span>• 건강기기/용품: 일상 건강 관리를 돕는 다양한 기기를 만나보세요.</span>
                        <span>• 스포츠/레저: 운동 효율을 높여줄 아이템이 가득합니다.</span>
                      </div>
                    </li>
                    <li>
                      <div className={styles.stepNum}>3</div>
                      <div className={styles.stepText}>
                        <strong>특별 혜택 활용</strong>
                        <span>• 이달의 특가: 오직 오케어몰에서만 만나는 특별한 가격.</span>
                        <span>• AI 맞춤 상품: 내 건강 상태에 딱 맞는 상품을 제안해 드립니다.</span>
                      </div>
                    </li>
                  </ul>
                  <p style={{marginTop: '2rem', fontWeight: 700, color: 'var(--kb-gray-600)'}}>오늘도 한 걸음, 오케어몰과 함께 건강한 일상을 만드세요!</p>
                </div>
              </div>
            )}

            {activeTab === 'challenge' && (
              <div className={`${styles.showcase} fade-in-up`}>
                <div className={styles.phoneImageMockup}>
                  <img 
                    src="/images/challenge.jpg" 
                    alt="걷기 챌린지" 
                    className={styles.responsiveImg} 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="placeholder-text">걷기 챌린지 앱 이미지 (public/images/challenge.jpg) 필요</div>';
                    }}
                  />
                </div>
                <div className={styles.textContent}>
                  <h3>자동으로 쌓이는 포인트 리워드</h3>
                  <p>데이터 연동 - 건강검진 결과와 일상 헬스 데이터 결합 분석</p>
                  <ul className={styles.stepList}>
                    <li>
                      <div className={styles.stepNum}>1</div>
                      <div className={styles.stepText}>
                        <strong>데이터 연동</strong>
                        <span>건강검진 결과와 일상 헬스 데이터 결합 분석</span>
                      </div>
                    </li>
                    <li>
                      <div className={styles.stepNum}>2</div>
                      <div className={styles.stepText}>
                        <strong>미션 참여</strong>
                        <span>[챌린지] 메뉴에서 손쉽게 참여. 일일 목표 달성 시 포인트 적립</span>
                      </div>
                    </li>
                    <li>
                      <div className={styles.stepNum}>3</div>
                      <div className={styles.stepText}>
                        <strong>오케어몰 활용</strong>
                        <span>적립된 포인트로 영양제, 건강용품 등 회원 전용 특가 상품 구매</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
