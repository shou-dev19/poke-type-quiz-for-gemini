import React from 'react';
import { PokemonType, TYPE_COLORS } from '../types/pokemon';

interface TypeIconProps {
  type: PokemonType;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const getTypeSvgIcon = (type: PokemonType) => {
  const iconProps = { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor" };
  switch (type) {
    case 'ノーマル':
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /></svg>;
    case 'ほのお':
      return <svg {...iconProps}><path d="M13.04 1.04a.75.75 0 0 0-1.08.04l-5.25 6.5a.75.75 0 0 0 .64 1.17h2.14l-3.1 7.76a.75.75 0 0 0 1.36.54l5.25-6.5a.75.75 0 0 0-.64-1.17h-2.14l3.1-7.76a.75.75 0 0 0-.32-1.08z" /></svg>;
    case 'みず':
      return <svg {...iconProps}><path d="M12 2a10 10 0 0 0-7.07 17.07A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-5.66-13.66L12 12V4a8 8 0 0 1 0 16z" /></svg>;
    case 'でんき':
      return <svg {...iconProps}><path d="M7 21h10l-5-9-5 9zm2.5-10.5L12 3l2.5 7.5H12z" /></svg>;
    case 'くさ':
      return <svg {...iconProps}><path d="M12 2a10 10 0 0 0-7.07 17.07A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-5.66-13.66L12 12V4a8 8 0 0 1 0 16z" /></svg>;
    case 'こおり':
      return <svg {...iconProps}><path d="M12 2l-2.12 6.36L3.52 9.5l4.24 4.24L6.36 20 12 17.88 17.64 20l-1.4-6.26 4.24-4.24-6.36-1.14L12 2z" /></svg>;
    case 'かくとう':
      return <svg {...iconProps}><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 10h-4v4H8v-4H4v-4h4V4h4v4h4v4z" /></svg>;
    case 'どく':
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-2-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>;
    case 'じめん':
      return <svg {...iconProps}><path d="M2 12h20v2H2zM12 2l-4 4h8zM12 22l4-4h-8z" /></svg>;
    case 'ひこう':
      return <svg {...iconProps}><path d="M21.41 11.59l-5.77-5.78a1 1 0 0 0-1.42 0l-5.77 5.78a1 1 0 0 0 0 1.42l5.77 5.78a1 1 0 0 0 1.42 0l5.77-5.78a1 1 0 0 0 0-1.42zM12 14.59L6.41 9l5.59-5.59L17.59 9 12 14.59z" /></svg>;
    case 'エスパー':
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-4-8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" /></svg>;
    case 'むし':
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>;
    case 'いわ':
      return <svg {...iconProps}><path d="M12 2L2 7l10 5 10-5L12 2zm0 11.5L3.5 8.5 12 4l8.5 4.5L12 13.5zM2 17l10 5 10-5-10-5L2 17z" /></svg>;
    case 'ゴースト':
      return <svg {...iconProps}><path d="M12 2a10 10 0 0 0-7.07 17.07A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-5.66-13.66L12 12V4a8 8 0 0 1 0 16zM9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>;
    case 'ドラゴン':
      return <svg {...iconProps}><path d="M10 2L2 7v10l8 5 8-5V7L14 2h-4zm2 1.5l4 2.5-4 2.5-4-2.5 4-2.5zM4 8.5l6 3.75v6.25l-6-3.75V8.5zm14 0v6.25l-6 3.75V12.25L20 8.5z" /></svg>;
    case 'あく':
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-2-9a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" /></svg>;
    case 'はがね':
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-4-4h8v-2h-8v2zm0-4h8V8h-8v2z" /></svg>;
    case 'フェアリー':
      return <svg {...iconProps}><path d="M12 2l2.12 6.36L20.48 9.5l-4.24 4.24L17.64 20 12 17.88 6.36 20l1.4-6.26-4.24-4.24 6.36-1.14L12 2z" /></svg>;
    default:
      return <svg {...iconProps}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" /></svg>;
  }
};

export default function TypeIcon({ type, size = 'md', animated = true, className = '' }: TypeIconProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const getTypeAnimation = (type: PokemonType) => {
    const baseClass = 'transition-all duration-300';
    
    if (!animated) return baseClass;

    const animations: Record<PokemonType, string> = {
      'ほのお': `${baseClass} animate-pulse hover:animate-bounce`,
      'みず': `${baseClass} hover:animate-pulse`,
      'でんき': `${baseClass} animate-pulse hover:animate-ping`,
      'くさ': `${baseClass} hover:animate-bounce`,
      'こおり': `${baseClass} animate-pulse hover:animate-spin`,
      'かくとう': `${baseClass} hover:animate-bounce`,
      'どく': `${baseClass} animate-pulse`,
      'じめん': `${baseClass} hover:animate-bounce`,
      'ひこう': `${baseClass} hover:animate-bounce`,
      'エスパー': `${baseClass} animate-pulse hover:animate-ping`,
      'むし': `${baseClass} hover:animate-bounce`,
      'いわ': `${baseClass} hover:animate-pulse`,
      'ゴースト': `${baseClass} animate-pulse hover:animate-ping`,
      'ドラゴン': `${baseClass} animate-pulse hover:animate-bounce`,
      'あく': `${baseClass} hover:animate-pulse`,
      'はがね': `${baseClass} hover:animate-pulse`,
      'フェアリー': `${baseClass} animate-pulse hover:animate-bounce`,
      'ノーマル': `${baseClass} hover:animate-pulse`
    };

    return animations[type];
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${getTypeAnimation(type)} 
        ${className}
        rounded-full 
        flex items-center justify-center 
        border-2 border-white
        shadow-lg
        cursor-pointer
        relative
        overflow-hidden
      `}
      style={{ 
        backgroundColor: TYPE_COLORS[type],
        background: `linear-gradient(135deg, ${TYPE_COLORS[type]}, ${TYPE_COLORS[type]}dd)`
      }}
    >
      <span className="text-2xl filter drop-shadow-sm">
        {getTypeSvgIcon(type)}
      </span>
      
      {/* タイプ別の特殊エフェクト */}
      {type === 'ほのお' && animated && (
        <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 opacity-60 animate-pulse" />
      )}
      
      {type === 'みず' && animated && (
        <div className="absolute inset-0">
          <div className="absolute top-2 left-2 w-2 h-2 bg-blue-200 rounded-full animate-ping opacity-60" />
          <div className="absolute bottom-3 right-3 w-1 h-1 bg-white rounded-full animate-pulse" />
        </div>
      )}
      
      {type === 'でんき' && animated && (
        <div className="absolute inset-0">
          <div className="absolute top-1 right-2 w-1 h-4 bg-yellow-200 animate-pulse opacity-80" />
          <div className="absolute bottom-2 left-3 w-1 h-3 bg-white animate-ping opacity-60" />
        </div>
      )}
      
      {type === 'フェアリー' && animated && (
        <div className="absolute inset-0">
          <div className="absolute top-2 left-2 w-1 h-1 bg-pink-200 rounded-full animate-ping" />
          <div className="absolute top-4 right-3 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-3 left-4 w-1 h-1 bg-pink-100 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>
      )}
      
      {type === 'ゴースト' && animated && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-900 to-gray-900 opacity-50 animate-pulse" />
      )}
    </div>
  );
}
