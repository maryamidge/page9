import React from 'react';

export const Logo: React.FC = () => {
  return (
    <section
      className="flex w-[150px] h-[92px] justify-center items-center absolute -translate-x-2/4 pt-1.5 pb-[7.699px] px-0 left-2/4 top-[118px] max-md:w-[120px] max-md:h-[74px] max-md:top-[100px] max-sm:w-[100px] max-sm:h-[62px] max-sm:top-20"
      aria-label="BizzKnit Logo"
    >
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/969ca48a8690adc5290eec1b75bda0e01a4ece53?width=306"
        alt="BizzKnit Logo"
        className="w-[153px] h-[78px] aspect-[51/26] absolute -left-px top-1.5 max-md:w-[122px] max-md:h-[62px] max-sm:w-[102px] max-sm:h-[52px]"
        loading="eager"
      />
    </section>
  );
};
