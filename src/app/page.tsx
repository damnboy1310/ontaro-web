import { Header } from "@/components/header"
import { ZenPointsCard } from "@/components/zen-points-card"
import { AvatarGrid } from "@/components/avatar-grid"
import { AppSection } from "@/components/app-section"
import { BottomNavigation } from "@/components/bottom-navigation"

const tarotItems = [
  {
    id: 1,
    image: "/image.png",
    category: "결혼운",
    emoji: "💍",
    title: "우리는 결혼까지 갈 수 있을까?",
    originalPrice: "19,900원",
    discount: "75%",
    finalPrice: "4,900원",
  },
  {
    id: 2,
    image: "/image-2.png",
    category: "연애운",
    emoji: "💖",
    title: "그 사람의 진심은 어디쯤일까?",
    originalPrice: "21,000원",
    discount: "77%",
    finalPrice: "4,900원",
  },
  {
    id: 3,
    image: "/image-3.png",
    category: "연애운",
    emoji: "💖",
    title: "솔로 탈출, 나에게도 곧 연애가 올까?",
    originalPrice: "21,000원",
    discount: "77%",
    finalPrice: "4,900원",
  },
  {
    id: 4,
    image: "/image-4.png",
    category: "재회운",
    title: "그 사람과, 다시 이어질 수 있을까?",
    originalPrice: "21,000원",
    discount: "77%",
    finalPrice: "4,900원",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pb-20">
        <div className="px-4 py-6 space-y-6">
          <ZenPointsCard />
          <AvatarGrid />
          <AppSection title="타로 베스트" items={tarotItems} />
          <AppSection
            title="서비스 제공소"
            items={[
                {
                  id: 1,
                  title: "웹툰보기, 서비스 및 이벤트 정보, 리뷰 등등",
                  image: "/webtoon-app-icon.png",
                  finalPrice: "8,000원",
                },
                {
                  id: 2,
                  title: "네 번째 웹툰보는 곳 추천해",
                  image: "/webtoon-recommendation-icon.png",
                  finalPrice: "8,000원",
                },
                {
                  id: 3,
                  title: "웹툰보는 곳 검색 및 리뷰 및 추천해",
                  image: "/webtoon-search-icon.png",
                  finalPrice: "20,000원",
                },
                {
                  id: 4,
                  title: "서비스 및 이벤트 정보, 추천해",
                  image: "/event-service-icon.png",
                  finalPrice: "8,000원",
                },
            ]}
          />

          <AppSection
            title="디자인 제공소"
            items={[
                {
                  id: 5,
                  title: "기획, 웹디자인 및 앱 디자인",
                  image: "/design-planning-icon.png",
                  finalPrice: "4,000원",
                },
                {
                  id: 6,
                  title: "그 외에 디자인 기타 디자인업무",
                  image: "/design-work-icon.png",
                  finalPrice: "4,000원",
                },
                {
                  id: 7,
                  title: "웹 디자인, 디자인 및 웹사이트 등등",
                  image: "/web-design-icon.png",
                  finalPrice: "4,000원",
                },
                {
                  id: 8,
                  title: "그 외에 디자인 디자인업무 및 디자인해",
                  image: "/design-service-icon.png",
                  finalPrice: "4,000원",
                },
            ]}
          />

          <AppSection
            title="AI 개발 업무용 (개발자)"
            items={[
                {
                  id: 9,
                  title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                  image: "/web-developer-icon.png",
                  finalPrice: "48,000원",
                },
                {
                  id: 10,
                  title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                  image: "/developer-service-icon.png",
                  finalPrice: "60,000원",
                },
                {
                  id: 11,
                  title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                  image: "/development-work-icon.png",
                  finalPrice: "20,000원",
                },
                {
                  id: 12,
                  title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                  image: "/ai-development-icon.png",
                  finalPrice: "20,000원",
                },
            ]}
          />
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
