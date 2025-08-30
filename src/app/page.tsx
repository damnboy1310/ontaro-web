import { Header } from "@/components/header"
import { ZenPointsCard } from "@/components/zen-points-card"
import { AvatarGrid } from "@/components/avatar-grid"
import { AppSection } from "@/components/app-section"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pb-20">
        <div className="px-4 py-6 space-y-6">
          <ZenPointsCard />
          <AvatarGrid />
          <AppSection
            title="서비스 제공소"
            items={[
              {
                id: 1,
                title: "웹툰보기, 서비스 및 이벤트 정보, 리뷰 등등",
                subtitle: "웹툰보기 가능한 8,000원",
                image: "/webtoon-app-icon.png",
                price: "8,000원",
              },
              {
                id: 2,
                title: "네 번째 웹툰보는 곳 추천해",
                subtitle: "웹툰보기 가능한 8,000원",
                image: "/webtoon-recommendation-icon.png",
                price: "8,000원",
              },
              {
                id: 3,
                title: "웹툰보는 곳 검색 및 리뷰 및 추천해",
                subtitle: "웹툰보기 가능한 20,000원",
                image: "/webtoon-search-icon.png",
                price: "20,000원",
              },
              {
                id: 4,
                title: "서비스 및 이벤트 정보, 추천해",
                subtitle: "웹툰보기 가능한 8,000원",
                image: "/event-service-icon.png",
                price: "8,000원",
              },
            ]}
            buttonText="더보기"
            buttonColor="bg-blue-500"
          />

          <AppSection
            title="디자인 제공소"
            items={[
              {
                id: 5,
                title: "기획, 웹디자인 및 앱 디자인",
                subtitle: "웹툰보기 가능한 4,000원",
                image: "/design-planning-icon.png",
                price: "4,000원",
              },
              {
                id: 6,
                title: "그 외에 디자인 기타 디자인업무",
                subtitle: "웹툰보기 가능한 4,000원",
                image: "/design-work-icon.png",
                price: "4,000원",
              },
              {
                id: 7,
                title: "웹 디자인, 디자인 및 웹사이트 등등",
                subtitle: "웹툰보기 가능한 4,000원",
                image: "/web-design-icon.png",
                price: "4,000원",
              },
              {
                id: 8,
                title: "그 외에 디자인 디자인업무 및 디자인해",
                subtitle: "웹툰보기 가능한 4,000원",
                image: "/design-service-icon.png",
                price: "4,000원",
              },
            ]}
            buttonText="더보기"
            buttonColor="bg-blue-500"
          />

          <AppSection
            title="AI 개발 업무용 (개발자)"
            items={[
              {
                id: 9,
                title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                subtitle: "웹툰보기 가능한 48,000원",
                image: "/web-developer-icon.png",
                price: "48,000원",
              },
              {
                id: 10,
                title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                subtitle: "웹툰보기 가능한 60,000원",
                image: "/developer-service-icon.png",
                price: "60,000원",
              },
              {
                id: 11,
                title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                subtitle: "웹툰보기 가능한 20,000원",
                image: "/development-work-icon.png",
                price: "20,000원",
              },
              {
                id: 12,
                title: "실무에서 웹개발자로 일하고있는 개발자가 직접 개발해 드립니다",
                subtitle: "웹툰보기 가능한 20,000원",
                image: "/ai-development-icon.png",
                price: "20,000원",
              },
            ]}
            buttonText="더보기"
            buttonColor="bg-blue-500"
          />
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
