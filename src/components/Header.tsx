import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        {/* Top Notice Bar for Mobile */}
        <div className={styles.topNoticeBar}>
          <div className={`container ${styles.topNoticeContainer}`}>
            <span className={styles.noticeText}>오케어앱 건강 관리 시작하세요!</span>
            <a href="https://play.google.com/store/apps/details?id=com.kb.ocare.app&hl=ko" target="_blank" rel="noopener noreferrer" className={styles.noticeBtn}>앱 설치</a>
          </div>
        </div>

        <div className={styles.headerContainerWrapper}>
          <div className={`container ${styles.headerContainer}`}>
            <div className={styles.logo}>
              <a href="https://joeunlife.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/logo.jpg" alt="더좋은라이프" className={styles.logoImage} />
              </a>
            </div>
            
            {/* Desktop Nav */}
            <nav className={styles.nav}>
              <a href="#about" className={styles.navLink}>서비스 소개</a>
              <a href="#services" className={styles.navLink}>헬스케어</a>
              <a href="#usecases" className={styles.navLink}>오케어앱</a>
              <a href="#faq" className={styles.navLink}>고객지원</a>
            </nav>
            
            <div className={styles.actions}>
              <div className={styles.headerPhone}>
                <span className={styles.phoneLabel}>Call Center</span>
                <span className={styles.phoneNumber}>1660-1383</span>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.kb.ocare.app&hl=ko" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.desktopOnly}`}>오케어앱 설치</a>
              
              <button 
                className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.hamburger + ' ' + styles.open : ''}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="메뉴 열기"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <button 
            className={styles.mobileNavClose}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="메뉴 닫기"
          >
            <X size={32} />
          </button>
          <ul>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>서비스 소개</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>헬스케어</a></li>
            <li><a href="#usecases" onClick={() => setIsMobileMenuOpen(false)}>오케어앱 서비스</a></li>
            <li><a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>자주 묻는 질문</a></li>
          </ul>
        </div>
        
        {/* Overlay for mobile menu */}
        <div className={`${styles.overlay} ${isMobileMenuOpen ? styles.open : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      </header>
    </>
  );
};

export default Header;
