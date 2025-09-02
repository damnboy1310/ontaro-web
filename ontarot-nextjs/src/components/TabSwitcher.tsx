'use client'

import React, { useState } from 'react'

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saju' | 'tarot'>('saju')

  return (
    <div className="w-full h-[52px] mb-[-9px]">
      <div className="relative flex w-full h-full bg-[var(--color-light-blue)] rounded-[12px] p-[2px]">
        {/* 배경 슬라이더 */}
        <div
          className={`absolute bg-[var(--color-blue)] rounded-[10px] top-[2px] transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] z-[0] ${
            activeTab === 'saju' ? 'left-[2px]' : 'left-[calc(50%+2px)]'
          }`}
          style={{
            width: 'calc(50% - 4px)',
            height: 'calc(100% - 4px)'
          }}
        />
        
        {/* 사주 탭 */}
        <button
          className={`flex-1 flex justify-center items-center text-[16px] z-[10] transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] relative ${
            activeTab === 'saju' 
              ? 'text-[var(--color-white)]' 
              : 'text-[var(--color-gray)]'
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
          className={`flex-1 flex justify-center items-center text-[16px] z-[10] transition-all duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] relative ${
            activeTab === 'tarot' 
              ? 'text-[var(--color-white)]' 
              : 'text-[var(--color-gray)]'
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
