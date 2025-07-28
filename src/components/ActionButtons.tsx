import React, { useState } from 'react';

export const ActionButtons: React.FC = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleCreateAccount = () => {
    setIsCreatingAccount(true);
    // Simulate account creation process
    setTimeout(() => {
      setIsCreatingAccount(false);
      alert('Account creation process started!');
    }, 2000);
  };

  const handleTroubleSignIn = () => {
    alert('Redirecting to help center...');
  };

  return (
    <nav className="absolute left-2/4 -translate-x-2/4" aria-label="Account actions">
      <button
        onClick={handleCreateAccount}
        disabled={isCreatingAccount}
        className="flex w-[396px] h-[48px] justify-center items-center gap-2 shadow-[0_2px_4px_0_rgba(251,208,110,0.24)] bg-secondary-40 px-4 py-4 rounded-lg top-[680px] relative hover:bg-secondary-40/80 active:bg-secondary-40/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-secondary-40 focus:ring-offset-2"
        aria-label={isCreatingAccount ? 'Creating account...' : 'Create new account'}
        type="button"
      >
        <span className="text-primary-dark text-center text-[16px] font-sf-pro font-bold leading-[24px] uppercase tracking-wide">
          {isCreatingAccount ? 'CREATING...' : 'CREATE ACCOUNT'}
        </span>
      </button>
      
      <button
        onClick={handleTroubleSignIn}
        className="flex w-[396px] h-12 justify-center items-center gap-2 px-4 py-4 rounded-lg top-[760px] relative hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-50 focus:ring-offset-2"
        aria-label="Get help with account creation"
        type="button"
      >
        <span className="text-primary-50 text-center text-[16px] font-sf-pro font-bold leading-[24px] uppercase tracking-wide">
          TROUBLE CREATE ACCOUNT?
        </span>
      </button>
    </nav>
  );
};
