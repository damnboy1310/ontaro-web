import Image from "next/image"

import { Card } from "@/components/ui/Card"

export interface ZenPointsCardProps {
  title: string
  points: number
  imageSrc: string
}

export function ZenPointsCard({ title, points, imageSrc }: ZenPointsCardProps) {
  return (
    <Card className="flex items-center gap-4">
      <Image src={imageSrc} alt="" width={48} height={48} className="rounded-full" />
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-muted-foreground">{points} pts</span>
      </div>
    </Card>
  )
}
