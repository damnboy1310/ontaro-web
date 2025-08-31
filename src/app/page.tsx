import { AvatarGrid } from "@/components/AvatarGrid"
import { BottomNavigation } from "@/components/BottomNavigation"
import { CardSection } from "@/components/CardSection"
import { Carousel } from "@/components/Carousel"
import { Header } from "@/components/Header"
import { ZenPointsCard } from "@/components/ZenPointsCard"

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="space-y-8 p-4">
        <Carousel />
        <CardSection />
        <AvatarGrid />
        <ZenPointsCard />
      </main>
      <BottomNavigation />
    </div>
  )
}
