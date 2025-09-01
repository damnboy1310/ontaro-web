'use client'

import React from 'react'
import { Grid3X3, MessageCircle, User, Gift } from 'lucide-react'

const BottomNavigation: React.FC = () => {
  const navItems = [
    {
      id: 'overview',
      label: '모아보기',
      icon: Grid3X3,
      active: true
    },
    {
      id: 'cinema',
      label: '젠디 시네마',
      icon: Gift,
      active: false
    },
    {
      id: 'chat',
      label: '채팅',
      icon: MessageCircle,
      active: false
    },
    {
      id: 'mypage',
      label: '마이 페이지',
      icon: User,
      active: false
    }
  ]

  return (
    <div className="sticky bottom-0 w-full max-w-[440px] h-[70px] flex flex-row items-center justify-around px-[10px] gap-[15px] rounded-t-[20px] z-sticky">
      {/* 배경 SVG */}
      <svg 
        className="flex z-[-1] absolute bottom-0 w-full h-full" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 375 95" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_417_2324)">
          <path 
            d="M0 20C0 8.9543 8.95431 0 20 0H355C366.046 0 375 8.95431 375 20V105H0V20Z" 
            fill="url(#paint0_linear_417_2324)" 
            fillOpacity="1" 
            style={{ mixBlendMode: 'overlay' }}
          />
          <path 
            d="M1 20C1 9.50659 9.50659 1 20 1H355C365.493 1 374 9.50659 374 20V104H1V20Z" 
            stroke="url(#paint1_linear_417_2324)" 
            strokeOpacity="0.9" 
            strokeWidth="2" 
            style={{ mixBlendMode: 'color-dodge' }}
          />
          <path 
            d="M1 20C1 9.50659 9.50659 1 20 1H355C365.493 1 374 9.50659 374 20V104H1V20Z" 
            stroke="white" 
            strokeOpacity="0.9" 
            strokeWidth="2"
          />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="305" id="filter0_b_417_2324" width="575" x="-100" y="-100">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_417_2324" />
            <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_417_2324" mode="normal" result="shape" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_417_2324" x1="62.5" x2="67.9634" y1="-1.05577e-06" y2="104.898">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_417_2324" x1="1.35872e-07" x2="384.284" y1="10.3125" y2="37.5854">
            <stop stopColor="white" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {navItems.map((item) => (
        <div key={item.id} className="w-full h-auto flex flex-col justify-start items-center gap-0 bg-transparent m-0 p-0 cursor-pointer">
          <div className="w-fit flex flex-col justify-center items-center gap-[2px] mt-[10px] mb-[2px]">
            <div className="flex justify-center items-center w-fit h-fit bg-transparent">
              <item.icon 
                size={24} 
                className={item.active ? 'text-[#5791FF]' : 'text-[#B9B9C6]'} 
                fill={item.active ? '#5791FF' : '#B9B9C6'}
              />
            </div>
            <p className={`text-[11px] font-medium leading-[135%] text-center ${
              item.active ? 'text-[#5791FF]' : 'text-[#B9B9C6]'
            }`}>
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BottomNavigation

