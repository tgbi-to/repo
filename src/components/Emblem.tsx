import React, { useState } from 'react';

interface EmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBorder?: boolean;
}

export const Emblem: React.FC<EmblemProps> = ({ 
  size = 'md', 
  className = '',
  showBorder = true
}) => {
  const [imgError, setImgError] = useState(false);
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-32 h-32 sm:w-40 sm:h-40'
  };

  // Base URL aware path for GitHub Pages subfolder support
  const envBase = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || './';
  const basePath = envBase.endsWith('/') ? envBase : `${envBase}/`;
  const logoSrc = `${basePath}assets/brand/TGBITO.jpg`;

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden ${
        showBorder ? 'ring-2 sm:ring-3 ring-amber-400 shadow-md' : ''
      } ${sizeClasses[size]} ${className}`}
    >
      {!imgError ? (
        <img
          src={logoSrc}
          alt="The Guardians Brotherhood, Inc. - The Original (TGBI-TO) Official Logo"
          className="w-full h-full object-cover rounded-full select-none"
          loading="eager"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0038A8] via-[#0d233a] to-[#C8102E] flex items-center justify-center text-amber-400 font-display font-extrabold text-xs sm:text-base border border-amber-400 select-none">
          TGBI
        </div>
      )}
    </div>
  );
};
