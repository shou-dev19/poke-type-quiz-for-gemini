import React from 'react';
import { PokemonType, TYPE_COLORS } from '../types/pokemon';

interface TypeIconProps {
  type: PokemonType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const getTypeSvgIcon = (type: PokemonType) => {
  const iconProps = { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor" };
  switch (type) {
    case 'ノーマル':
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>;
    case 'ほのお':
      return <svg {...iconProps}><path d="M13.5.5a1.5 1.5 0 0 0-3 0V11c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.86-3.14-7-7-7h-1.5V.5z"/></svg>;
    case 'みず':
      return <svg {...iconProps}><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/></svg>;
    case 'でんき':
      return <svg {...iconProps}><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>;
    case 'くさ':
      return <svg {...iconProps}><path d="M20.5 10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5c-2.48 0-4.5-2.02-4.5-4.5S13.52 0 11 0 6.5 2.02 6.5 4.5c0 .83-.67 1.5-1.5 1.5S3.5 4.33 3.5 3.5c0-2.48 2.02-4.5 4.5-4.5S12.5 1.02 12.5 3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-1.1.9-2 2-2s2 .9 2 2c0 2.48-2.02 4.5-4.5 4.5S11 10.98 11 13.5c0 .83-.67 1.5-1.5 1.5S8 14.33 8 13.5c0-2.48-2.02-4.5-4.5-4.5S-1 11.02-1 13.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-1.1.9-2 2-2s2 .9 2 2c2.48 0 4.5 2.02 4.5 4.5S12.98 24 10.5 24s-4.5-2.02-4.5-4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 1.1-.9 2-2 2s-2-.9-2-2c-2.48 0-4.5-2.02-4.5-4.5S3.02 9 5.5 9s4.5 2.02 4.5 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5z"/></svg>;
    case 'こおり':
      return <svg {...iconProps}><path d="M12 2l-2.83 8.5H.5l7.24 5.27-2.77 8.5L12 18.27l7.86 5.5-2.77-8.5L23.5 10.5h-8.67L12 2z"/></svg>;
    case 'かくとう':
      return <svg {...iconProps}><path d="M18.5 2c-1.93 0-3.5 1.57-3.5 3.5S16.57 9 18.5 9 22 7.43 22 5.5 20.43 2 18.5 2zm0 5c-.83 0-1.5-.67-1.5-1.5S17.67 4 18.5 4s1.5.67 1.5 1.5S19.33 7 18.5 7zM5.5 15c-1.93 0-3.5 1.57-3.5 3.5S3.57 22 5.5 22 9 20.43 9 18.5 7.43 15 5.5 15zm0 5c-.83 0-1.5-.67-1.5-1.5S4.67 17 5.5 17s1.5.67 1.5 1.5S6.33 20 5.5 20z"/><path d="M22 15h-2v-2h-2v2h-2v2h2v2h2v-2h2z"/></svg>;
    case 'どく':
      return <svg {...iconProps}><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>;
    case 'じめん':
      return <svg {...iconProps}><path d="M2 12h20v2H2z"/><path d="M12 2L2 12h20L12 2zM12 5.69l5.31 5.31H6.69L12 5.69z"/></svg>;
    case 'ひこう':
      return <svg {...iconProps}><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>;
    case 'エスパー':
      return <svg {...iconProps}><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>;
    case 'むし':
      return <svg {...iconProps}><path d="M20 8h-4V6h4v2zm-8 14v-2h-4v2h4zm6-12v-2h-4v2h4zm-6 6v-2h-4v2h4zm-2-8V4H6v2h4zm-2 8v-2H2v2h4zm10 2v-2h-4v2h4zm-2-4v-2h-4v2h4zm-4-4V8H6v2h4zm-2 8v-2H2v2h4zm10 2v-2h-4v2h4z"/></svg>;
    case 'いわ':
      return <svg {...iconProps}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>;
    case 'ゴースト':
      return <svg {...iconProps}><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>;
    case 'ドラゴン':
      return <svg {...iconProps}><path d="M10 22.5a2.5 2.5 0 0 1-5 0c0-1.38 1.12-2.5 2.5-2.5S10 21.12 10 22.5zM21.5 10a2.5 2.5 0 0 0 0-5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5z"/><path d="M2.5 10a2.5 2.5 0 0 0 0-5C1.12 5 0 6.12 0 7.5S1.12 10 2.5 10z"/><path d="M22 16.5c0-3.59-2.91-6.5-6.5-6.5H8.5c-3.59 0-6.5 2.91-6.5 6.5S5.01 23 8.5 23h7c3.59 0 6.5-2.91 6.5-6.5z"/></svg>;
    case 'あく':
      return <svg {...iconProps}><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>;
    case 'はがね':
      return <svg {...iconProps}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/><path d="M12 12l-10-5 10-5 10 5-10 5z"/></svg>;
    case 'フェアリー':
      return <svg {...iconProps}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
    default:
      return <svg {...iconProps}><circle cx="12" cy="12" r="10" /></svg>;
  }
};

export default function TypeIcon({ type, size = 'md', className = '' }: TypeIconProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-2xl',
    md: 'w-16 h-16 text-4xl',
    lg: 'w-20 h-20 text-5xl'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${className}
        rounded-full 
        flex items-center justify-center 
        border-4 border-white/50
        shadow-lg
        cursor-pointer
        transition-all duration-300 transform hover:scale-110 hover:shadow-xl
      `}
      style={{ 
        backgroundColor: TYPE_COLORS[type],
        color: 'white'
      }}
    >
      <div className="transform scale-75">
        {getTypeSvgIcon(type)}
      </div>
    </div>
  );
}