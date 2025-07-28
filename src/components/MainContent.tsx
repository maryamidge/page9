import React from 'react';

export const MainContent: React.FC = () => {
  return (
    <main className="flex w-[260px] flex-col items-center gap-6 absolute -translate-x-2/4 h-[102px] left-2/4 top-[244px]">
      <section className="flex justify-center items-center gap-2 self-stretch relative px-[18px] py-2">
        <h1 className="w-[190px] h-[86px] text-[#F8F1EC] text-center text-[32px] font-bold leading-[41px] relative max-md:w-[180px] max-md:text-[28px] max-md:leading-9 max-sm:w-40 max-sm:text-2xl max-sm:leading-8">
          It starts with a spark!
        </h1>
      </section>
    </main>
  );
};
