import React from 'react';

export const TermsSection: React.FC = () => {
  return (
    <section
      className="flex w-[340px] flex-col justify-center items-center absolute -translate-x-2/4 px-4 py-2 left-2/4 top-[580px]"
      aria-label="Terms and policies information"
    >
      <div className="flex justify-center items-center gap-2 relative px-[18px] py-2">
        <p className="text-warm-white text-center text-[13px] font-sf-pro font-normal leading-[18px] tracking-normal">
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
