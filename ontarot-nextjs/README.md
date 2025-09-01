# 젠디 (ZENDi) - Next.js 마이그레이션

AI 사주 타로 운세 상담 서비스 젠디의 웹페이지를 Next.js로 마이그레이션한 프로젝트입니다.

## 📋 프로젝트 개요

원본 HTML/CSS를 분석하여 Next.js + TypeScript + Tailwind CSS로 마이그레이션한 젠디 서비스의 메인 페이지입니다.

### 주요 기능

- 🎨 반응형 모바일 퍼스트 디자인
- 📱 모바일 최적화된 UI/UX (최대 440px 너비)
- 🎠 Swiper를 활용한 배너 슬라이더
- 🔄 사주/타로 탭 전환 기능
- 📊 카테고리별 운세 서비스 그리드
- 📦 상품 리스트 컴포넌트
- 🧭 하단 네비게이션 바
- 📄 회사 정보 푸터

## 🏗️ 프로젝트 구조

```
ontarot-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css          # 전역 스타일
│   │   ├── layout.tsx           # 루트 레이아웃
│   │   └── page.tsx             # 메인 페이지
│   └── components/
│       ├── Header.tsx           # 헤더 컴포넌트
│       ├── BannerSlider.tsx     # 배너 슬라이더
│       ├── TabSwitcher.tsx      # 사주/타로 탭 전환
│       ├── CategoryGrid.tsx     # 카테고리 그리드
│       ├── ProductList.tsx      # 상품 리스트
│       ├── BottomNavigation.tsx # 하단 네비게이션
│       └── Footer.tsx           # 푸터
├── public/
│   └── images/                  # 이미지 리소스
└── package.json
```

## 🛠️ 기술 스택

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Swiper, Lucide React
- **Package Manager**: npm

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18.18.0 이상 (권장: 20.0.0 이상)
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 또는 yarn 사용
yarn install
```

### 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev

# 또는 yarn 사용
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드된 애플리케이션 실행
npm start
```

## 🎨 컴포넌트 설명

### Header
- 젠디 로고와 브랜드명 표시
- 고정 헤더 (sticky positioning)

### BannerSlider
- Swiper 라이브러리를 사용한 이미지 슬라이더
- 자동 재생 및 페이지네이션 포함

### TabSwitcher
- 사주/타로 서비스 전환 탭
- 애니메이션 효과가 있는 슬라이딩 인디케이터

### CategoryGrid
- 4x3 그리드 레이아웃의 카테고리 아이콘
- 12개의 운세 카테고리 (인기, 연애운, 결혼운 등)

### ProductList
- 상품 썸네일, 제목, 가격 정보 표시
- 할인율 및 원가/할인가 표시

### BottomNavigation
- 4개의 주요 네비게이션 메뉴
- SVG 배경과 글래스모피즘 효과

### Footer
- 회사 정보 및 연락처
- 소셜 미디어 링크
- 이용약관 및 개인정보처리방침 링크

## 🎯 마이그레이션 완료 사항

✅ Next.js 프로젝트 구조 설정  
✅ TypeScript 설정  
✅ Tailwind CSS 구성  
✅ 컴포넌트 기반 아키텍처 구현  
✅ 반응형 디자인 적용  
✅ SEO 메타데이터 설정  
✅ 이미지 최적화 준비  

## 🔄 추가 작업 필요 사항

- 🖼️ 실제 이미지 리소스 추가
- 📱 상세 반응형 테스트
- 🎭 애니메이션 및 인터랙션 개선
- 🔗 라우팅 및 페이지 전환 구현
- 📊 상태 관리 (필요시)
- 🧪 테스트 코드 작성

## 📝 주의사항

- Node.js 버전이 18.18.0 미만인 경우 업그레이드 필요
- 이미지 경로는 실제 리소스에 맞게 조정 필요
- 일부 CSS calc() 함수는 인라인 스타일로 처리

## 🤝 기여

프로젝트 개선을 위한 기여를 환영합니다. 이슈나 풀 리퀘스트를 자유롭게 제출해 주세요.

## 📄 라이선스

이 프로젝트는 젠디(ZENDi) 서비스의 마이그레이션 버전입니다.