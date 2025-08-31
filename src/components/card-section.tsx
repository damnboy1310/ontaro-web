import { Card } from "@/components/ui/card"

export function CardSection() {
  return (
    <section className="space-y-4 p-4">
      {/* TODO: Implement cards based on zedi-crawl markup */}
      <Card>
        <h3 className="text-lg font-semibold">Card title</h3>
        <p className="text-sm text-gray-500">Card content</p>
      </Card>
    </section>
  )
}

