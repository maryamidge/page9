import React from 'react';

export const HomeIndicator: React.FC = () => {
  return (
    <footer
      className="flex w-full flex-col items-start absolute h-[34px] z-10 left-0 bottom-0"
      role="contentinfo"
      aria-label="Home indicator"
    >
      <div className="flex flex-col items-start relative w-full">
        <div className="flex w-full h-[34px] flex-col justify-end items-center relative pb-2">
          <div
            className="w-[154px] h-[5px] backdrop-blur-2xl relative bg-black rounded-[100px]"
            role="presentation"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
};
