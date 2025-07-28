import React from 'react';

export const MainContent: React.FC = () => {
  return (
    <main className="flex w-[260px] flex-col items-center gap-6 absolute -translate-x-2/4 left-2/4 top-[280px]">
      <section className="flex justify-center items-center gap-2 self-stretch relative px-[18px] py-2">
        <h1 className="text-warm-white text-center text-[40px] font-sf-pro font-bold leading-[50px] tracking-tight">
          It starts with<br />a spark!
        </h1>
      </section>
    </main>
  );
};
