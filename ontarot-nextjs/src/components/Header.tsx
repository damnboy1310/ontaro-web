'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="w-full h-[60px] max-w-[440px] fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-50 bg-white/90 backdrop-blur-[10px]">
      <div className="container-mobile flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-[3px]">
          <span className="text-heading text-[21px] leading-[120%] whitespace-pre-line text-start select-none">
            젠디
          </span>
        </div>
        <div className="flex flex-row justify-start items-center gap-[10px]">
          {/* 추가 메뉴 아이템들이 들어갈 수 있는 공간 */}
        </div>
      </div>
    </div>
  )
}

export default Header
