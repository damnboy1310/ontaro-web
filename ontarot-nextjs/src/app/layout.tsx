import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '젠디 - AI 사주 타로 운세 상담 서비스',
  description: '하루 5,000명이 선택한 명리학 기반 AI 사주&타로, 젠디(ZENDi) - 고민이 많은 사람들을 위한 연애, 재회, 궁합부터 신년운세, 재물운까지!. AI 호키동자와 포키가 당신의 운명의 지도를 심층 분석해 드립니다. 중요한 결정을 앞두고 있다면, 지금 바로 젠디에서 명쾌한 해답을 찾아보세요 !',
  keywords: 'AI 사주, 타로, 운세, 연애운, 결혼운, 재회운, 궁합운, 신년운, 재물운, 직업운',
  authors: [{ name: '젠디' }],
  creator: '젠디',
  publisher: '젠디',
  robots: 'index, follow',
  openGraph: {
    title: '젠디 - AI 사주 타로 운세 상담 서비스',
    description: '하루 5,000명이 선택한 명리학 기반 AI 사주&타로, 젠디(ZENDi) - 고민이 많은 사람들을 위한 연애, 재회, 궁합부터 신년운세, 재물운까지!. AI 호키동자와 포키가 당신의 운명의 지도를 심층 분석해 드립니다. 중요한 결정을 앞두고 있다면, 지금 바로 젠디에서 명쾌한 해답을 찾아보세요 !',
    siteName: '젠디',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/images/metadata/ZENDi_opengraph(1200x628).png',
        width: 1200,
        height: 628,
        alt: '젠디 - AI 사주 타로 운세 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '젠디 - AI 사주 타로 운세 상담 서비스',
    description: '하루 5,000명이 선택한 명리학 기반 AI 사주&타로, 젠디(ZENDi) - 고민이 많은 사람들을 위한 연애, 재회, 궁합부터 신년운세, 재물운까지!. AI 호키동자와 포키가 당신의 운명의 지도를 심층 분석해 드립니다. 중요한 결정을 앞두고 있다면, 지금 바로 젠디에서 명쾌한 해답을 찾아보세요 !',
    images: ['/images/metadata/ZENDi_opengraph(1200x628).png'],
  },
  verification: {
    google: 'hWW1bBJ6LvLKLS6A5afB7t2X8Y2XElwU15YVw8BwaDA',
  },
  icons: {
    icon: '/images/metadata/Favicon.png',
    apple: '/images/metadata/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
