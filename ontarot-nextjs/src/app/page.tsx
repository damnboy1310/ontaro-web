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
      <Header />
      <div className="w-full max-w-[440px] mx-auto flex flex-col shadow-[-10px_0_5px_-5px_rgba(0,0,0,0.01),10px_0_5px_-5px_rgba(0,0,0,0.01)] bg-white min-h-screen">
        <div className="flex-1 pt-[60px] pb-[90px]">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-[25px] bg-transparent m-0 p-[0_20px_0]">
            {/* 배너 슬라이더 */}
            <BannerSlider />
            {/* 탭 전환 */}
            <TabSwitcher />
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
        {/* 하단 네비게이션 - 상품 리스트 바로 아래에 배치 */}
        <BottomNavigation />
        <Footer />
      </div>
    </>
  )
}