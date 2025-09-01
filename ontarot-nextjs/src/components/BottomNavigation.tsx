'use client'
import React from 'react'
import { LayoutGrid, Clapperboard, MessageSquare, User } from 'lucide-react'
interface NavItem {
  id: string
  name: string
  icon: React.ElementType
  active: boolean
}
const BottomNavigation: React.FC = () => {
  const navItems: NavItem[] = [
    { id: 'home', name: '모아보기', icon: LayoutGrid, active: true },
    { id: 'cinema', name: '젠디 시네마', icon: Clapperboard, active: false },
    { id: 'chat', name: '채팅', icon: MessageSquare, active: false },
    { id: 'mypage', name: '마이 페이지', icon: User, active: false },
  ]
  return (
    <div className="z-sticky css-1wo71yy">
      {/* 배경 SVG */}
      <svg className="css-eg55pt" fill="none" preserveAspectRatio="none" viewBox="0 0 375 95" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_417_2324)">
          <path d="M0 20C0 8.9543 8.95431 0 20 0H355C366.046 0 375 8.95431 375 20V105H0V20Z" fill="url(#paint0_linear_417_2324)" fillOpacity="1" style={{ mixBlendMode: 'overlay' }} />
          <path d="M1 20C1 9.50659 9.50659 1 20 1H355C365.493 1 374 9.50659 374 20V104H1V20Z" stroke="url(#paint1_linear_417_2324)" strokeOpacity="0.9" strokeWidth="2" style={{ mixBlendMode: 'color-dodge' }} />
          <path d="M1 20C1 9.50659 9.50659 1 20 1H355C365.493 1 374 9.50659 374 20V104H1V20Z" stroke="white" strokeOpacity="0.9" strokeWidth="2" />
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
            <stop stopColor="white" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* 네비게이션 아이템들 */}
      {navItems.map((item) => (
        <div key={item.id} className="css-lut2cg" style={{ cursor: 'pointer' }}>
          <div className={item.active ? 'css-slhcub' : 'css-gyglvk'}>
            <div className="css-19igbq8">
              <item.icon
                size={24}
                color={item.active ? '#5791FF' : '#B9B9C6'}
                strokeWidth={2}
              />
            </div>
            <p>{item.name}</p>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .css-1wo71yy {
          position: sticky;
          bottom: 0;
          width: 100%;
          max-width: 440px;
          height: 70px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          padding: 0 10px 0;
          gap: 15px;
          border-radius: 20px 20px 0px 0px;
        }
        
        .css-eg55pt {
          display: flex;
          z-index: -1;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
        }
        
        .css-lut2cg {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 0px;
          background-color: transparent;
          margin: 0;
          padding: 0;
        }
        
        .css-slhcub {
          width: fit-content;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2px;
          margin-top: 10px;
          margin-bottom: 2px;
        }
        
        .css-slhcub > p {
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 135%;
          text-align: center;
          color: #5791FF;
        }
        
        .css-gyglvk {
          width: fit-content;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2px;
          margin-top: 10px;
          margin-bottom: 2px;
        }
        
        .css-gyglvk > p {
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 135%;
          text-align: center;
          color: #B9B9C6;
        }
        
        .css-19igbq8 {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          height: fit-content;
          background-color: transparent;
        }
      `}</style>
    </div>
  )
}
export default BottomNavigation

