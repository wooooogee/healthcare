import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceOverview from './components/ServiceOverview';
import MainServices from './components/MainServices';
import ServiceDetail from './components/ServiceDetail';
import CommonPolicies from './components/CommonPolicies';
import HealthPrograms from './components/HealthPrograms';
import MedicalSupport from './components/MedicalSupport';
import CareSupport from './components/CareSupport';
import PsychologicalCare from './components/PsychologicalCare';
import ScrollToTop from './components/ScrollToTop';
import UseCases from './components/UseCases';
import AppGuide from './components/AppGuide';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MainServices />
        <ServiceDetail />
        <ServiceOverview />
        <CommonPolicies />
        <MedicalSupport />
        <CareSupport />
        <PsychologicalCare />
        <UseCases />
        <HealthPrograms />
        <AppGuide />
        <FAQ />
        <ScrollToTop />
      </main>
    </>
  );
};

export default App;
