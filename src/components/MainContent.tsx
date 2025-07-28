import React from 'react';

export const MainContent: React.FC = () => {
  return (
    <main className="flex w-[260px] flex-col items-center gap-6 absolute -translate-x-2/4 left-2/4 top-[244px]">
      <section className="flex justify-center items-center gap-2 self-stretch relative px-[18px] py-2">
        <h1 className="w-[190px] h-[86px] text-warm-white text-center text-[32px] font-sf-pro font-bold leading-[41px] relative">
          It starts with a spark!
        </h1>
      </section>
    </main>
  );
};
