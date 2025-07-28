import React from 'react';
import { StatusBar } from '@/components/StatusBar';
import { Logo } from '@/components/Logo';
import { MainContent } from '@/components/MainContent';
import { TermsSection } from '@/components/TermsSection';
import { ActionButtons } from '@/components/ActionButtons';
import { HomeIndicator } from '@/components/HomeIndicator';

const Index = () => {
  return (
    <div
      className="w-full min-h-[932px] relative overflow-hidden bg-white max-md:min-h-screen max-sm:min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #1a365d 0%, #2d5a87 50%, #4a90a4 100%)'
      }}
    >
      <div className="w-full h-[938px] absolute left-0 top-0" />
      
      <StatusBar />
      
      <Logo />
      
      <MainContent />
      
      <TermsSection />
      
      <ActionButtons />
      
      <HomeIndicator />
    </div>
  );
};

export default Index;
