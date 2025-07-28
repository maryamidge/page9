import React from 'react';

export const TermsSection: React.FC = () => {
  return (
    <section
      className="flex w-[329px] h-[87px] flex-col justify-center items-center gap-6 absolute -translate-x-2/4 px-0 py-2 left-2/4 top-[633px]"
      aria-label="Terms and policies information"
    >
      <div className="flex h-[99px] justify-center items-center gap-2 self-stretch relative px-[18px] py-2">
        <p className="w-[325px] h-[75px] text-[#F8F1EC] text-center text-[15px] font-[510] leading-6 relative">
          By tapping{' '}
          <span className="font-bold">Create Account</span>{' '}
          you agree to our{' '}
          <a href="#terms" className="underline hover:text-white transition-colors" aria-label="Read our terms">
            Terms
          </a>
          . Learn how we process your data in our{' '}
          <a href="#privacy" className="underline hover:text-white transition-colors" aria-label="Read our privacy policy">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#cookies" className="underline hover:text-white transition-colors" aria-label="Read our cookies policy">
            Cookies Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};
