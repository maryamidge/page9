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
      className="w-[428px] h-[938px] relative overflow-hidden mx-auto font-sf-pro"
      style={{
        background: 'linear-gradient(75deg, hsl(var(--forest-green)) 17.55%, hsl(var(--forest-green-light)) 114.5%)'
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
