'use client'
import Header from '@/components/Header'
import BannerSlider from '@/components/BannerSlider'
import TabSwitcher from '@/components/TabSwitcher'
import CategoryGrid from '@/components/CategoryGrid'
import ProductList from '@/components/ProductList'
import BottomNavigation from '@/components/BottomNavigation'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
export default function Home() {
  const [vh, setVh] = useState(0)
  useEffect(() => {
    setVh(window.innerHeight * 0.01)
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    const handleResize = () => {
      setVh(window.innerHeight * 0.01)
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [vh])
  const sajuBestProducts = [
    {
      id: 'saju-1',
      category: '연애운',
      categoryIcon: '💖',
      title: '종합분석, 사주 속 내가 만날 사람, 관상까지',
      thumbnail: 'https://placehold.co/121x104/FF6B6B/FFFFFF',
      originalPrice: 39900,
      discountRate: 75,
      discountPrice: 9900,
    },
    {
      id: 'saju-2',
      category: '결혼운',
      categoryIcon: '💍',
      title: '내 사주속 배우자는 누구일까?',
      thumbnail: 'https://placehold.co/121x104/4ECDC4/FFFFFF',
      originalPrice: 39000,
      discountRate: 75,
      discountPrice: 9900,
    },
    {
      id: 'saju-3',
      category: '재회운',
      categoryIcon: '❤️‍🩹',
      title: '프리미엄, 그 사람과 다시 만날 수 있을까? (+AI 챗봇 제공)',
      thumbnail: 'https://placehold.co/121x104/45B7D1/FFFFFF',
      originalPrice: 50000,
      discountRate: 42,
      discountPrice: 29000,
    },
    {
      id: 'saju-4',
      category: '연애운',
      categoryIcon: '💖',
      title: '사주 속 남은 연애 횟수, 몇 번일까?',
      thumbnail: 'https://placehold.co/121x104/96CEB4/FFFFFF',
      originalPrice: 39000,
      discountRate: 75,
      discountPrice: 9900,
    },
  ]
  const tarotBestProducts = [
    {
      id: 'tarot-1',
      category: '결혼운',
      categoryIcon: '💍',
      title: '우리는 결혼까지 갈 수 있을까?',
      thumbnail: 'https://placehold.co/121x104/FFEAA7/FFFFFF',
      originalPrice: 19900,
      discountRate: 75,
      discountPrice: 4900,
    },
    {
      id: 'tarot-2',
      category: '연애운',
      categoryIcon: '💖',
      title: '그 사람의 진심은 어디쯤일까?',
      thumbnail: 'https://placehold.co/121x104/DDA0DD/FFFFFF',
      originalPrice: 21000,
      discountRate: 77,
      discountPrice: 4900,
    },
    {
      id: 'tarot-3',
      category: '연애운',
      categoryIcon: '💖',
      title: '솔로 탈출, 나에게도 곧 연애가 올까?',
      thumbnail: 'https://placehold.co/121x104/98D8C8/FFFFFF',
      originalPrice: 21000,
      discountRate: 77,
      discountPrice: 4900,
    },
    {
      id: 'tarot-4',
      category: '재회운',
      categoryIcon: '❤️‍🩹',
      title: '그 사람과, 다시 이어질 수 있을까?',
      thumbnail: 'https://placehold.co/121x104/F7DC6F/FFFFFF',
      originalPrice: 21000,
      discountRate: 77,
      discountPrice: 4900,
    },
  ]
  const hairConsultingProducts = [
    {
      id: 'hair-1',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      title: '[프리미엄 헤어컨설팅] 준오헤어 태호 원장의 남성 헤어스타일 추천',
      thumbnail: 'https://placehold.co/121x104/BB8FCE/FFFFFF',
      originalPrice: 49000,
      discountRate: 100,
      discountPrice: 0,
    },
    {
      id: 'hair-2',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      title: '[프리미엄 헤어컨설팅] 여성 얼굴형 분석 및 31종 헤어 심층 분석',
      thumbnail: 'https://placehold.co/121x104/85C1E9/FFFFFF',
      originalPrice: 80000,
      discountRate: 100,
      discountPrice: 0,
    },
    {
      id: 'hair-3',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      title: '[여성 헤어컨설팅] 요즘 핫한 아이돌 최신 유행 헤어 추천',
      thumbnail: 'https://placehold.co/121x104/F8C471/FFFFFF',
      originalPrice: 20000,
      discountRate: 100,
      discountPrice: 0,
    },
    {
      id: 'hair-4',
      category: 'AI 헤어 컨설팅',
      categoryIcon: '',
      title: '[프리미엄 헤어컨설팅] 리안헤어 여성 퍼스널 헤어컨설팅',
      thumbnail: 'https://placehold.co/121x104/82E0AA/FFFFFF',
      originalPrice: 20000,
      discountRate: 100,
      discountPrice: 0,
    },
  ]
  return (
    <>
      <div className="main-container">
        {/* wrap 컨테이너 */}
        <div className="wrap-container">
          {/* css-1pru9mk - 메인 컨텐츠 컨테이너 */}
          <div className="main-content-container">
            {/* css-1sp56x8 - 스크롤 컨텐츠 영역 (padding-bottom: 90px) */}
            <div className="scroll-content-area">
              {/* css-12e2oxn - 헤더 (sticky top: 0) */}
              <Header />
              {/* css-bwlul6 - 메인 컨텐츠 */}
              <div className="content-group">
                {/* 배너 슬라이더 */}
                <BannerSlider />
                {/* 탭 전환 */}
                <TabSwitcher />
                {/* 카테고리 그리드 */}
                <CategoryGrid />
                {/* 구분선 */}
                <hr className="divider-line" />
                {/* 상품 리스트들 */}
                <div className="product-list-container">
                  <ProductList title="사주 베스트" products={sajuBestProducts} />
                  <ProductList title="타로 베스트" products={tarotBestProducts} />
                  <ProductList title="AI 헤어 컨설팅 더보기" products={hairConsultingProducts} />
                </div>
              </div>
            </div>
          </div>
          {/* z-sticky css-1wo71yy - 하단 네비게이션 (wrap 바로 아래, css-1pru9mk와 동등한 레벨) */}
          <BottomNavigation />
        </div>
        {/* css-1geap17 - Footer (position: static) - wrap 밖으로 이동 */}
        <Footer />
      </div>
    </>
  )
}