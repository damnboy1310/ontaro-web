import { ZenPointsCard } from "@/components/ZenPointsCard"

const cards = [
  {
    title: "Welcome Bonus",
    points: 120,
    imageSrc: "/globe.svg",
  },
  {
    title: "Daily Streak",
    points: 45,
    imageSrc: "/file.svg",
  },
  {
    title: "Referral",
    points: 300,
    imageSrc: "/window.svg",
  },
]

export function CardSection() {
  return (
    <section className="space-y-4">
      {cards.map((card) => (
        <ZenPointsCard key={card.title} {...card} />
      ))}
    </section>
  )
}
