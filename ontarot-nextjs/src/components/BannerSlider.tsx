'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const BannerSlider: React.FC = () => {
  const banners = [
    {
      id: 1,
      title: '리뷰이벤트',
      image: 'https://placehold.co/400x400/5791FF/FFFFFF',
      alt: '리뷰이벤트'
    },
    {
      id: 2,
      title: '이프홍보',
      image: 'https://placehold.co/400x400/6660FF/FFFFFF',
      alt: '이프홍보'
    }
  ]

  return (
    <div className="container-mobile flex flex-col justify-start items-start gap-[25px] pt-0">
      <div className="overflow-hidden" style={{ margin: '0 -20px', width: 'calc(100% + 40px)' }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full aspect-square rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)] cursor-pointer transition-transform duration-[var(--transition-fast)] ease hover:scale-[1.02]">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BannerSlider
