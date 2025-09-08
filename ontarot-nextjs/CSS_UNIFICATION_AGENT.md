# CSS 획일화 에이전트 - Tailwind v4 기반 프로젝트 정리

## 📋 현재 프로젝트 CSS 사용 현황 분석

### 🔍 발견된 문제점들

#### 1. Tailwind 버전 혼용
- **Tailwind v4**: `@tailwindcss/postcss` 플러그인 사용, `tailwindcss: ^4` 설치
- **Tailwind v3 문법**: 여전히 v3 스타일의 클래스명 사용 (예: `bg-[#F4F4F4]`, `text-[#161741]`)

#### 2. CSS 적용 방법 혼재
- **Tailwind 클래스**: 대부분의 컴포넌트에서 사용
- **인라인 스타일**: `style={{}}` 속성으로 직접 스타일링
- **styled-jsx**: `BottomNavigation.tsx`에서 `<style jsx>` 사용
- **CSS 변수**: `globals.css`에서 정의된 CSS 변수 일부 사용

#### 3. 구체적인 혼용 사례들

**Footer.tsx**:
```tsx
// Tailwind v3 문법 + 인라인 스타일 혼용
className="bg-[#F4F4F4]"  // v3 문법
style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}  // 인라인 스타일
```

**Header.tsx**:
```tsx
// 과도한 인라인 스타일 사용
style={{
  userSelect: 'none',
  margin: 0,
  padding: 0,
  // ... 20개 이상의 스타일 속성
}}
```

**BottomNavigation.tsx**:
```tsx
// styled-jsx 사용
<style jsx>{`
  .css-1wo71yy {
    position: sticky;
    // ... 전통적인 CSS
  }
`}</style>
```

## 🎯 Tailwind v4 기반 획일화 방안

### 1. CSS 변수 중심 설계

#### 1.1 디자인 토큰 정의
```css
/* globals.css */
@layer base {
  :root {
    /* 색상 시스템 */
    --color-primary: #5791FF;
    --color-primary-light: #DDE9FF;
    --color-secondary: #6660FF;
    --color-text-primary: #161741;
    --color-text-secondary: #454567;
    --color-text-muted: #737373;
    --color-background: #F4F4F4;
    --color-white: #FFFFFF;
    
    /* 간격 시스템 */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 16px;
    --spacing-xl: 20px;
    --spacing-2xl: 24px;
    --spacing-3xl: 32px;
    --spacing-4xl: 40px;
    
    /* 폰트 시스템 */
    --font-size-xs: 10px;
    --font-size-sm: 11px;
    --font-size-base: 14px;
    --font-size-lg: 16px;
    --font-size-xl: 18px;
    --font-size-2xl: 20px;
    --font-size-3xl: 21px;
    
    /* 폰트 굵기 */
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    /* 둥근 모서리 */
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 10px;
    --radius-xl: 12px;
    --radius-2xl: 20px;
    
    /* 그림자 */
    --shadow-sm: 0px 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0px 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0px 4px 20px rgba(0, 0, 0, 0.15);
    
    /* 애니메이션 */
    --transition-fast: 0.2s;
    --transition-normal: 0.3s;
    --transition-slow: 0.5s;
  }
}
```

#### 1.2 Tailwind v4 문법으로 변환
```tsx
// 기존 v3 문법
className="bg-[#F4F4F4] text-[#161741] px-[20px] py-[20px]"

// v4 문법 (CSS 변수 사용)
className="bg-[var(--color-background)] text-[var(--color-text-primary)] px-[var(--spacing-xl)] py-[var(--spacing-xl)]"
```

### 2. 컴포넌트별 리팩토링 계획

#### 2.1 Footer.tsx
```tsx
// 현재: 하드코딩된 색상값들
className="bg-[#F4F4F4] text-[#737373]"

// 개선: CSS 변수 사용
className="bg-[var(--color-background)] text-[var(--color-text-muted)]"
```

#### 2.2 Header.tsx
```tsx
// 현재: 과도한 인라인 스타일
style={{ userSelect: 'none', margin: 0, padding: 0, ... }}

// 개선: CSS 변수 + Tailwind 클래스
className="select-none m-0 p-0 text-[var(--font-size-3xl)] font-[var(--font-weight-bold)] text-[var(--color-text-primary)]"
```

#### 2.3 BottomNavigation.tsx
```tsx
// 현재: styled-jsx 사용
<style jsx>{`...`}</style>

// 개선: CSS 변수 + Tailwind 클래스
className="sticky bottom-0 w-full max-w-[440px] h-[70px] flex flex-row items-center justify-around px-[var(--spacing-sm)] gap-[var(--spacing-lg)] rounded-t-[var(--radius-2xl)]"
```

### 3. 유틸리티 클래스 시스템 구축

#### 3.1 공통 컴포넌트 클래스
```css
@layer components {
  /* 버튼 시스템 */
  .btn-primary {
    @apply bg-[var(--color-primary)] text-[var(--color-white)] font-[var(--font-weight-bold)] px-[var(--spacing-lg)] py-[var(--spacing-md)] rounded-[var(--radius-lg)] transition-all duration-[var(--transition-fast)];
  }
  
  .btn-secondary {
    @apply bg-[var(--color-primary-light)] text-[var(--color-primary)] font-[var(--font-weight-semibold)] px-[var(--spacing-lg)] py-[var(--spacing-md)] rounded-[var(--radius-lg)] transition-all duration-[var(--transition-fast)];
  }
  
  /* 카드 시스템 */
  .card {
    @apply bg-[var(--color-white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] p-[var(--spacing-xl)];
  }
  
  /* 텍스트 시스템 */
  .text-heading {
    @apply text-[var(--color-text-primary)] font-[var(--font-weight-bold)];
  }
  
  .text-body {
    @apply text-[var(--color-text-secondary)] font-[var(--font-weight-normal)];
  }
}
```

#### 3.2 반응형 디자인 클래스
```css
@layer utilities {
  /* 모바일 우선 디자인 */
  .container-mobile {
    @apply w-full max-w-[440px] mx-auto px-[var(--spacing-xl)];
  }
  
  /* 그리드 시스템 */
  .grid-category {
    @apply grid grid-cols-4 gap-[var(--spacing-md)_var(--spacing-sm)];
  }
}
```

### 4. 마이그레이션 단계별 계획

#### Phase 1: CSS 변수 시스템 구축 (1-2일)
- [ ] `globals.css`에 디자인 토큰 정의
- [ ] 색상, 간격, 폰트 시스템 변수화
- [ ] 기존 하드코딩된 값들을 변수로 교체

#### Phase 2: 컴포넌트 리팩토링 (3-5일)
- [ ] Footer.tsx - 색상 및 간격 변수화
- [ ] Header.tsx - 인라인 스타일 제거
- [ ] BannerSlider.tsx - 그림자 및 애니메이션 변수화
- [ ] CategoryGrid.tsx - 그리드 시스템 개선
- [ ] ProductList.tsx - 버튼 및 카드 시스템 적용
- [ ] TabSwitcher.tsx - CSS 변수 활용 개선

#### Phase 3: BottomNavigation.tsx 완전 리팩토링 (1-2일)
- [ ] styled-jsx 제거
- [ ] Tailwind 클래스 + CSS 변수로 완전 교체
- [ ] SVG 스타일링 개선

#### Phase 4: 최적화 및 테스트 (1-2일)
- [ ] 성능 테스트
- [ ] 일관성 검증
- [ ] 문서화

### 5. 코드 품질 개선 방안

#### 5.1 ESLint 규칙 추가
```json
{
  "rules": {
    "react/no-inline-styles": "error",
    "no-inline-styles": "error"
  }
}
```

#### 5.2 TypeScript 타입 정의
```typescript
// types/design-tokens.ts
export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    // ...
  };
  spacing: {
    xs: string;
    sm: string;
    // ...
  };
  // ...
}
```

#### 5.3 컴포넌트 스타일 가이드라인
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  const baseClasses = "font-[var(--font-weight-semibold)] rounded-[var(--radius-lg)] transition-all duration-[var(--transition-fast)]";
  const variantClasses = {
    primary: "bg-[var(--color-primary)] text-[var(--color-white)]",
    secondary: "bg-[var(--color-primary-light)] text-[var(--color-primary)]",
    outline: "border border-[var(--color-primary)] text-[var(--color-primary)]"
  };
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};
```

### 6. 예상 효과 및 장점

#### 6.1 개발 효율성 향상
- 일관된 디자인 시스템으로 개발 속도 향상
- CSS 변수 변경으로 전체 테마 변경 가능
- 컴포넌트 재사용성 증가

#### 6.2 유지보수성 개선
- 중앙집중식 스타일 관리
- 버그 발생 시 추적 용이
- 디자인 변경 시 영향 범위 명확

#### 6.3 성능 최적화
- Tailwind v4의 향상된 성능 활용
- CSS 번들 크기 최적화
- 런타임 스타일 계산 최소화

### 7. 주의사항 및 고려사항

#### 7.1 브라우저 호환성
- CSS 변수 지원 범위 확인
- 폴백 스타일 제공 필요

#### 7.2 팀 협업
- CSS 변수 네이밍 컨벤션 통일
- 컴포넌트 스타일 가이드라인 공유
- 코드 리뷰 시 스타일 일관성 검증

#### 7.3 점진적 마이그레이션
- 기존 기능 유지하면서 단계별 적용
- 각 단계별 테스트 및 검증
- 롤백 계획 수립

---

## 📚 참고 자료

- [Tailwind CSS 4.0 무엇이 달라졌나요?](https://velog.io/@oneook/tailwindcss-4.0-%EB%AC%B4%EC%97%87%EC%9D%B4-%EB%8B%AC%EB%9D%BC%EC%A1%8C%EB%82%98%EC%9A%94)
- [Tailwind CSS v4 공식 문서](https://tailwindcss.com/docs/installation)
- [CSS 변수 모범 사례](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## 🎯 다음 단계

1. **CSS 변수 시스템 설계 및 구현**
2. **컴포넌트별 마이그레이션 계획 수립**
3. **팀 내 스타일 가이드라인 공유**
4. **단계별 리팩토링 실행**

이 문서는 프로젝트의 CSS 획일화를 위한 로드맵이며, 각 단계별로 세부적인 구현 가이드를 제공합니다.
