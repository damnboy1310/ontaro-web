import { AvatarGrid } from "@/components/avatar-grid"
import { BottomNavigation } from "@/components/bottom-navigation"
import { CardSection } from "@/components/card-section"
import { Carousel } from "@/components/carousel"
import { Header } from "@/components/header"
import { ZenPointsCard } from "@/components/zen-points-card"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="space-y-8 pb-20">
        <Carousel />
        <CardSection />
        <AvatarGrid />
        <ZenPointsCard />
      </main>
      <BottomNavigation />
    </>
  )
}

