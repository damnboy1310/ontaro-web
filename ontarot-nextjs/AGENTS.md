# 젠디 (ZENDi) 웹사이트 마이그레이션 프로젝트

## 프로젝트 개요

이 프로젝트는 기존 HTML/CSS로 작성된 젠디 웹사이트를 Next.js 기반의 현대적인 웹 애플리케이션으로 마이그레이션하는 프로젝트입니다.

## 기술 스택

- **프레임워크**: Next.js 15.5.2 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **상태 관리**: React Hooks (useState)
- **UI 라이브러리**: 
  - Swiper.js (이미지 슬라이더)
  - Lucide React (아이콘)
- **폰트**: Pretendard Variable

## 프로젝트 구조

```
ontarot-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 메인 페이지
│   │   └── globals.css         # 전역 스타일
│   └── components/
│       ├── Header.tsx          # 헤더 컴포넌트
│       ├── BannerSlider.tsx    # 배너 슬라이더
│       ├── TabSwitcher.tsx     # 탭 스위처
│       ├── CategoryGrid.tsx    # 카테고리 그리드
│       ├── ProductList.tsx     # 상품 리스트
│       ├── BottomNavigation.tsx # 하단 네비게이션
│       └── Footer.tsx          # 푸터
├── public/
│   └── images/                 # 이미지 리소스
└── package.json
```

## 주요 기능

### 1. 반응형 헤더
- 젠디 로고 표시
- 스티키 포지셔닝
- 모바일 최적화

### 2. 배너 슬라이더
- Swiper.js 기반 이미지 캐러셀
- 자동 재생 및 페이지네이션
- 터치 제스처 지원

### 3. 탭 스위처
- 사주/타로 탭 전환
- 슬라이딩 애니메이션
- 상태 관리

### 4. 카테고리 그리드
- 12개 운세 카테고리 표시
- 그리드 레이아웃
- 호버 효과

### 5. 상품 리스트
- 사주 베스트, 타로 베스트 등
- 할인율 및 가격 표시
- 카테고리 태그

### 6. 하단 네비게이션
- 4개 메뉴 항목
- SVG 배경 효과
- 활성 상태 표시

### 7. 푸터
- 회사 정보
- 소셜 미디어 링크
- 법적 정보

## 개발 환경 설정

### 필수 요구사항
- Node.js 18.18.0 이상
- npm 9.0.0 이상

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 마이그레이션 과정

### 1단계: 프로젝트 초기화
- Next.js 프로젝트 생성
- TypeScript 설정
- Tailwind CSS 설정

### 2단계: 컴포넌트 분해
- 원본 HTML을 논리적 섹션으로 분할
- 재사용 가능한 컴포넌트 생성
- Props 인터페이스 정의

### 3단계: 스타일링 마이그레이션
- Emotion CSS → Tailwind CSS 변환
- 반응형 디자인 적용
- 애니메이션 및 전환 효과 구현

### 4단계: 기능 구현
- Swiper.js 통합
- 상태 관리 로직
- 이벤트 핸들러

### 5단계: 최적화
- 이미지 최적화
- 성능 개선
- 접근성 향상

## 원본 소스

- **HTML**: `crawled-data/index_formatted.html`
- **CSS**: `crawled-data/68d7b4f6bae4edc4.css`
- **Swiper CSS**: `crawled-data/bc8831281eb208c3.css`

## 브랜치 전략

- `main`: 프로덕션 코드
- `main-v3`: 마이그레이션 개발 브랜치
- `feature/*`: 개별 기능 개발

## 배포

- **개발**: `http://localhost:3000`
- **프로덕션**: Vercel 플랫폼 (권장)

## 기여 가이드라인

1. 기능 브랜치에서 개발
2. TypeScript 타입 정의 필수
3. Tailwind CSS 클래스 사용
4. 컴포넌트 단위 테스트 작성
5. PR 리뷰 후 머지

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 연락처

프로젝트 관련 문의사항이 있으시면 GitHub Issues를 통해 연락해 주세요.
