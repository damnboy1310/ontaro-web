'use client'

import React, { useState } from 'react'

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saju' | 'tarot'>('saju')

  return (
    <div className="w-full h-[52px] mb-[-9px]">
      <div className="relative flex w-full h-full bg-[#dde9ff] rounded-[12px] p-[2px]">
        <button
          className={`flex-1 flex justify-center items-center text-[16px] font-bold text-white z-[1] transition-colors duration-[0.3s] ${
            activeTab === 'saju' ? 'text-white' : 'text-[#454567]'
          }`}
          onClick={() => setActiveTab('saju')}
        >
          사주
        </button>
        <button
          className={`flex-1 flex justify-center items-center text-[16px] font-normal text-[#454567] z-[1] transition-colors duration-[0.3s] ${
            activeTab === 'tarot' ? 'text-white' : 'text-[#454567]'
          }`}
          onClick={() => setActiveTab('tarot')}
        >
          타로
        </button>
        <div
          className={`absolute bg-[#5791ff] rounded-[10px] top-[2px] transition-all duration-[0.3s] ease-in-out ${
            activeTab === 'saju' ? 'left-[2px]' : 'left-[calc(50%+2px)]'
          }`}
          style={{
            width: 'calc(50% - 4px)',
            height: 'calc(100% - 4px)'
          }}
        />
      </div>
    </div>
  )
}

export default TabSwitcher
