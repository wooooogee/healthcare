import React from 'react';
import { ChevronLeft, X, Menu, ShoppingCart, Home, Search, Truck, User, Star, CreditCard, Gift, Users, Zap, Package } from 'lucide-react';
import styles from './OCareMallLiveScreen.module.css';

const OCareMallLiveScreen: React.FC = () => {
  return (
    <div className={styles.screen}>
      {/* Top App Bar */}
      <div className={styles.topAppBar}>
        <ChevronLeft size={24} />
        <span className={styles.title}>오케어몰</span>
        <X size={24} />
      </div>

      {/* Header */}
      <div className={styles.header}>
        <Menu size={24} />
        <div className={styles.logoArea}>
          <span className={styles.logoText}><span>O'CARE</span> Mall</span>
        </div>
        <ShoppingCart size={24} />
      </div>

      {/* Nav Tabs */}
      <div className={styles.navTabs}>
        <span className={`${styles.tab} ${styles.activeTab}`}>포인트관</span>
        <span className={styles.tab}>건강/건강기능식품</span>
        <span className={styles.tab}>건강기기/용품</span>
        <span className={styles.tab}>스포츠/레저</span>
      </div>

      {/* Point Bar */}
      <div className={styles.pointBar}>
        <span>STAR 0 <Star size={10} fill="white" style={{display:'inline', verticalAlign:'middle'}}/></span>
        <span>|</span>
        <span>POINT 80 <CreditCard size={10} style={{display:'inline', verticalAlign:'middle'}}/></span>
      </div>

      {/* Main Banner */}
      <div className={styles.mainBanner}>
        <div className={styles.bannerTitle}>
          오늘도 한 걸음<br/>지치지 않는 발걸음
        </div>
        <div className={styles.bannerSubtitle}>
          지금 걷는 중<br/>미래의 나 칭찬 중
        </div>
        {/* Placeholder for character illustration */}
        <div className={styles.bannerIllustration}>
           <Users size={80} color="rgba(0,0,0,0.1)" />
        </div>
        <div className={styles.pageIndicator}>1 / 7</div>
      </div>

      {/* Category Grid */}
      <div className={styles.categories}>
        <div className={styles.categoryItem}>
          <div className={styles.iconBox} style={{backgroundColor: '#FFADAD'}}><CreditCard size={20} /></div>
          <span className={styles.categoryText}>프리미엄</span>
        </div>
        <div className={styles.categoryItem}>
          <div className={styles.iconBox} style={{backgroundColor: '#FFD6A5'}}><Zap size={20} /></div>
          <span className={styles.categoryText}>이달의 특가</span>
        </div>
        <div className={styles.categoryItem}>
          <div className={styles.iconBox} style={{backgroundColor: '#BDB2FF'}}><Gift size={20} /></div>
          <span className={styles.categoryText}>선물하기</span>
        </div>
        <div className={styles.categoryItem}>
          <div className={styles.iconBox} style={{backgroundColor: '#A0C4FF'}}><User size={20} /></div>
          <span className={styles.categoryText}>K-직장인</span>
        </div>
        <div className={styles.categoryItem}>
          <div className={styles.iconBox} style={{backgroundColor: '#9BF6FF'}}><Package size={20} /></div>
          <span className={styles.categoryText}>신상상품관</span>
        </div>
      </div>

      {/* AI Recommendation Peek */}
      <div className={styles.recommendSection}>
        <div className={styles.recommendHeader}>
          <span className={styles.recommendTitle}>AI맞춤상품</span>
          <div className={styles.recommendUser}>'김예림'님을 위한 맞춤상품을 추천합니다</div>
        </div>
        <div className={styles.productScroll}>
          {[1, 2, 3].map(i => (
            <div key={i} className={styles.productCard}>
              <div style={{width: '100%', height: '80px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Package size={30} color="#ccc" />
              </div>
              <div style={{fontSize: '0.6rem', height: '2.4em', overflow: 'hidden', color: '#888'}}>추천 건강 보조제 {i}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className={styles.bottomNav}>
        <div className={`${styles.bottomNavItem} ${styles.activeBottomItem}`}>
           <Home size={22} />
           <span>홈</span>
        </div>
        <div className={styles.bottomNavItem}>
           <Search size={22} />
           <span>검색</span>
        </div>
        <div className={styles.bottomNavItem}>
           <Truck size={22} />
           <span>배송조회</span>
        </div>
        <div className={styles.bottomNavItem}>
           <User size={22} />
           <span>MY</span>
        </div>
      </div>
    </div>
  );
};

export default OCareMallLiveScreen;
