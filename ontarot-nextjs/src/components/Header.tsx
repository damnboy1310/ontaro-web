'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="w-full h-[60px] max-w-[440px] sticky top-0 flex justify-center items-center z-100 bg-white">
      <div className="w-full h-auto flex flex-row justify-between items-center gap-0 bg-transparent m-0 p-[10px_20px]">
        <div className="w-fit h-auto flex flex-row justify-start items-center gap-[3px] bg-transparent m-0 p-0">
          <span className="text-[21px] font-bold text-[#161741] opacity-100 font-normal leading-[120%] whitespace-pre-line text-start word-break-normal font-family-pretendard-variable letter-spacing-normal word-spacing-normal font-display-swap">
            젠디
          </span>
        </div>
        <div className="w-fit h-auto flex flex-row justify-start items-center gap-[10px] bg-transparent m-0 p-0">
          {/* 추가 메뉴 아이템들이 들어갈 수 있는 공간 */}
        </div>
      </div>
    </div>
  )
}

export default Header
