'use client'

import React from 'react'

interface CategoryItem {
  id: string
  name: string
  icon: string
  alt: string
}

const CategoryGrid: React.FC = () => {
  const categories: CategoryItem[] = [
    { id: 'best', name: '인기', icon: 'https://placehold.co/62x62/FF6B6B/FFFFFF', alt: '인기' },
    { id: 'new', name: '신규', icon: 'https://placehold.co/62x62/4ECDC4/FFFFFF', alt: '신규' },
    { id: 'reunion', name: '재회운', icon: 'https://placehold.co/62x62/45B7D1/FFFFFF', alt: '재회운' },
    { id: 'wedding', name: '결혼운', icon: 'https://placehold.co/62x62/96CEB4/FFFFFF', alt: '결혼운' },
    { id: 'love', name: '연애운', icon: 'https://placehold.co/62x62/FFEAA7/FFFFFF', alt: '연애운' },
    { id: 'gunghap', name: '궁합운', icon: 'https://placehold.co/62x62/DDA0DD/FFFFFF', alt: '궁합운' },
    { id: 'newyear', name: '신년운', icon: 'https://placehold.co/62x62/98D8C8/FFFFFF', alt: '신년운' },
    { id: 'job', name: '직업운', icon: 'https://placehold.co/62x62/F7DC6F/FFFFFF', alt: '직업운' },
    { id: 'chat', name: '사주 채팅', icon: 'https://placehold.co/62x62/BB8FCE/FFFFFF', alt: '사주 채팅' },
    { id: 'free', name: '무료체험', icon: 'https://placehold.co/62x62/85C1E9/FFFFFF', alt: '무료체험' },
    { id: 'money', name: '재물운', icon: 'https://placehold.co/62x62/F8C471/FFFFFF', alt: '재물운' },
    { id: 'saju', name: '사주풀이', icon: 'https://placehold.co/62x62/82E0AA/FFFFFF', alt: '사주풀이' }
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-4 gap-[12px_10px] w-full opacity-100 transition-all duration-[0.3s] ease-in-out h-[300px]">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-[4px] cursor-pointer w-full h-[87px] leading-initial"
          >
            <div className="relative w-[62px] h-[62px]">
              <img
                src={category.icon}
                alt={category.alt}
                className="w-full h-full object-cover rounded-[10px] transition-filter duration-[0.2s] ease hover:brightness-110"
              />
            </div>
            <p className="text-[14px] font-bold text-[#161741] text-center">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryGrid
