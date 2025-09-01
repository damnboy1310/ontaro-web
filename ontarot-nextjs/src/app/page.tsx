import React from 'react'
import Header from '@/components/Header'
import BannerSlider from '@/components/BannerSlider'
import TabSwitcher from '@/components/TabSwitcher'
import CategoryGrid from '@/components/CategoryGrid'
import ProductList from '@/components/ProductList'
import BottomNavigation from '@/components/BottomNavigation'
import Footer from '@/components/Footer'

export default function Home() {
  // 사주 베스트 상품 데이터
  const sajuBestProducts = [
    {
      id: 'saju-1',
      title: '종합분석, 사주 속 내가 만날 사람, 관상까지',
      category: '연애운',
      categoryIcon: '💖',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/saju-single-image-future-partner-dongja/thumbnail_best_mark.png',
      originalPrice: 39900,
      discountPrice: 9900,
      discountRate: 75
    },
    {
      id: 'saju-2',
      title: '내 사주속 배우자는 누구일까?',
      category: '결혼운',
      categoryIcon: '💍',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/saju-marry-dongja-v2/thumbnail_new_mark.png',
      originalPrice: 39000,
      discountPrice: 9900,
      discountRate: 75
    },
    {
      id: 'saju-3',
      title: '프리미엄, 그 사람과 다시 만날 수 있을까? (+AI 챗봇 제공)',
      category: '재회운',
      categoryIcon: '❤️‍🩹',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/saju-gunghap-dongja-reunion-v2/thumbnail_premium_mark.png',
      originalPrice: 50000,
      discountPrice: 29000,
      discountRate: 42
    },
    {
      id: 'saju-4',
      title: '사주 속 남은 연애 횟수, 몇 번일까?',
      category: '연애운',
      categoryIcon: '💖',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/saju-single-dongja-future-partners-v2/thumbnail_new_mark.png',
      originalPrice: 39000,
      discountPrice: 9900,
      discountRate: 75
    }
  ]

  // 타로 베스트 상품 데이터
  const tarotBestProducts = [
    {
      id: 'tarot-1',
      title: '우리는 결혼까지 갈 수 있을까?',
      category: '결혼운',
      categoryIcon: '💍',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/tarot-to-marry-pokki/thumbnail.png',
      originalPrice: 19900,
      discountPrice: 4900,
      discountRate: 75
    },
    {
      id: 'tarot-2',
      title: '그 사람의 진심은 어디쯤일까?',
      category: '연애운',
      categoryIcon: '💖',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/tarot-single-crush-pokki/thumbnail.png',
      originalPrice: 21000,
      discountPrice: 4900,
      discountRate: 77
    },
    {
      id: 'tarot-3',
      title: '솔로 탈출, 나에게도 곧 연애가 올까?',
      category: '연애운',
      categoryIcon: '💖',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/tarot-escape-single-pokki/thumbnail.png',
      originalPrice: 21000,
      discountPrice: 4900,
      discountRate: 77
    },
    {
      id: 'tarot-4',
      title: '그 사람과, 다시 이어질 수 있을까?',
      category: '재회운',
      categoryIcon: '❤️‍🩹',
      thumbnail: 'https://hokki-public-assets.s3.ap-northeast-2.amazonaws.com/products/tarot-single-reunion-pokki/thumbnail.png',
      originalPrice: 21000,
      discountPrice: 4900,
      discountRate: 77
    }
  ]

  // AI 헤어 컨설팅 상품 데이터
  const hairConsultingProducts = [
    {
      id: 'hair-1',
      title: '[프리미엄 헤어컨설팅] 준오헤어 태호 원장의 남성 헤어스타일 추천',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      thumbnail: '/images/jpg/thumbnail-zendi/taeho.jpg',
      originalPrice: 49000,
      discountPrice: 0,
      discountRate: 100
    },
    {
      id: 'hair-2',
      title: '[프리미엄 헤어컨설팅] 여성 얼굴형 분석 및 31종 헤어 심층 분석',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      thumbnail: '/images/jpg/thumbnail-zendi/wevemet-woman.jpg',
      originalPrice: 80000,
      discountPrice: 0,
      discountRate: 100
    },
    {
      id: 'hair-3',
      title: '[여성 헤어컨설팅] 요즘 핫한 아이돌 최신 유행 헤어 추천',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      thumbnail: '/images/jpg/thumbnail-zendi/yaad.jpg',
      originalPrice: 20000,
      discountPrice: 0,
      discountRate: 100
    },
    {
      id: 'hair-4',
      title: '[프리미엄 헤어컨설팅] 리안헤어 여성 퍼스널 헤어컨설팅',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      thumbnail: '/images/jpg/thumbnail-zendi/riahn.jpg',
      originalPrice: 20000,
      discountPrice: 0,
      discountRate: 100
    }
  ]

  return (
    <div className="w-full max-w-[440px] flex flex-col shadow-[-10px_0_5px_-5px_rgba(0,0,0,0.01),10px_0_5px_-5px_rgba(0,0,0,0.01)] bg-white">
      <div id="wrap" className="w-full min-h-screen">
        <div className="relative flex flex-col w-full min-h-screen bg-white">
          <div className="relative flex flex-col w-full min-h-[calc(100vh-70px)] pb-[90px]">
            {/* 헤더 */}
            <Header />
            
            {/* 메인 콘텐츠 */}
            <div className="w-full h-auto flex flex-col justify-start items-start gap-[25px] bg-transparent m-0 px-0 pt-0">
              {/* 배너 슬라이더 */}
              <BannerSlider />
              
              {/* 탭 스위처 */}
              <div className="px-[20px] w-full">
                <TabSwitcher />
              </div>
              
              {/* 카테고리 그리드 */}
              <div className="px-[20px] w-full">
                <CategoryGrid />
              </div>
              
              {/* 구분선 */}
              <hr className="ml-[-20px] border border-solid border-[var(--ZENDi-Background,#f5f5f5)] h-0" style={{ width: 'calc(100% + 40px)' }} />
              
              {/* 상품 리스트들 */}
              <div className="px-[20px] w-full space-y-6">
                <ProductList title="사주 베스트" products={sajuBestProducts} />
                <ProductList title="타로 베스트" products={tarotBestProducts} />
                <ProductList title="AI 헤어 컨설팅 더보기" products={hairConsultingProducts} />
              </div>
            </div>
          </div>
          
          {/* 하단 네비게이션 */}
          <BottomNavigation />
        </div>
        
        {/* 푸터 */}
        <Footer />
      </div>
    </div>
  )
}