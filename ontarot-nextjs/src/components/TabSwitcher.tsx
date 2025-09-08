'use client'

import React, { useState } from 'react'

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saju' | 'tarot'>('saju')

  return (
    <div className="container-mobile w-full h-[52px] mb-[-9px]">
      <div className="relative flex w-full h-full bg-[var(--color-primary-light)] rounded-[var(--radius-xl)] p-[2px]">
        {/* 배경 슬라이더 */}
        <div
          className={`absolute bg-[var(--color-primary)] rounded-[var(--radius-lg)] top-[2px] transition-all duration-[var(--transition-normal)] ease-[cubic-bezier(0.4,0,0.2,1)] z-[0] ${
            activeTab === 'saju' ? 'left-[2px]' : 'left-[calc(50%+2px)]'
          }`}
          style={{
            width: 'calc(50% - 4px)',
            height: 'calc(100% - 4px)'
          }}
        />
        
        {/* 사주 탭 */}
        <button
          className={`flex-1 flex justify-center items-center text-[var(--font-size-lg)] z-[10] transition-all duration-[var(--transition-normal)] ease-[cubic-bezier(0.4,0,0.2,1)] relative ${
            activeTab === 'saju' 
              ? 'text-white' 
              : 'text-[var(--color-text-secondary)]'
          }`}
          style={{
            fontWeight: activeTab === 'saju' ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)'
          }}
          onClick={() => setActiveTab('saju')}
        >
          사주
        </button>
        
        {/* 타로 탭 */}
        <button
          className={`flex-1 flex justify-center items-center text-[var(--font-size-lg)] z-[10] transition-all duration-[var(--transition-normal)] ease-[cubic-bezier(0.4,0,0.2,1)] relative ${
            activeTab === 'tarot' 
              ? 'text-white' 
              : 'text-[var(--color-text-secondary)]'
          }`}
          style={{
            fontWeight: activeTab === 'tarot' ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)'
          }}
          onClick={() => setActiveTab('tarot')}
        >
          타로
        </button>
      </div>
    </div>
  )
}

export default TabSwitcher
