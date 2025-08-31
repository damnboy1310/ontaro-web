import { AvatarGrid } from "@/components/AvatarGrid"
import { BottomNavigation } from "@/components/BottomNavigation"
import { CardSection } from "@/components/CardSection"
import { Carousel } from "@/components/Carousel"
import { Header } from "@/components/Header"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="space-y-8 p-4 pb-20">
        <Carousel />
        <CardSection />
        <AvatarGrid />
      </main>
      <BottomNavigation />
    </>
  )
}
