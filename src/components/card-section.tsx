import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CardItem {
  id: number
  image: string
  title: string
  category?: string
  emoji?: string
  originalPrice?: string
  discount?: string
  finalPrice: string
}

interface CardSectionProps {
  title: string
  cards: CardItem[]
  moreText?: string
}

export function CardSection({ title, cards, moreText = "더보기" }: CardSectionProps) {
  return (
    <div className="w-full">
      <div className="inline-flex flex-col items-start pb-2.5">
        <Card className="inline-flex flex-col items-start gap-4 bg-white rounded-[10px] border-0 shadow-none w-full">
          <CardContent className="flex flex-col p-0 w-full">
            <div className="flex flex-col w-full">
              <h2 className="mt-[-1px] text-xl font-bold leading-[28.4px] tracking-[-0.2px] text-[#161741]">
                {title}
              </h2>
            </div>
            <div className="flex flex-col gap-5 mt-4 w-full">
              <div className="flex flex-col gap-[26px] min-h-[300px]">
                {cards.map((card) => (
                  <div key={card.id} className="flex w-full items-start gap-[18px]">
                    <div
                      className="h-[104px] w-[121px] rounded-[10px] bg-cover bg-center flex-shrink-0"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <div className="flex flex-1 flex-col justify-between pb-0.5">
                      <div className="flex flex-col gap-[6.86px] pr-[71.33px]">
                        {card.category && (
                          <Badge className="inline-flex h-[21px] items-center gap-[3px] rounded-full bg-[#dde9ff] px-1.5 py-[1.25px] text-[#5791ff] hover:bg-[#dde9ff]">
                            {card.emoji && (
                              <span className="text-[10px] font-bold leading-[15px]">{card.emoji}</span>
                            )}
                            <span className="text-[11px] font-bold leading-[16.5px]">
                              {card.category}
                            </span>
                          </Badge>
                        )}
                        <div className="text-base font-bold leading-[22.7px] text-[#161741]">
                          {card.title}
                        </div>
                      </div>
                      <div className="inline-flex h-[23px] items-center gap-1 overflow-hidden">
                        {card.originalPrice && (
                          <div className="text-sm font-bold leading-[21px] text-[#454567] line-through">
                            {card.originalPrice}
                          </div>
                        )}
                        <div className="inline-flex items-start gap-px">
                          {card.discount && (
                            <div className="text-lg font-bold leading-[27px] text-[#5791ff]">
                              {card.discount}
                            </div>
                          )}
                          <div className="text-lg font-bold leading-[27px] text-[#161741]">
                            {card.finalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="h-12 w-full items-center justify-center rounded-[10px] bg-[#5791ff] px-[179.25px] py-[11.5px] hover:bg-[#4a7de6]">
                <span className="text-base font-semibold leading-6 text-white">
                  {moreText}
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
