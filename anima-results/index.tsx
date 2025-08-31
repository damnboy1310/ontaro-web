import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import React from "react";

const tarotCards = [
  {
    id: 1,
    image: "/image.png",
    category: "💍 결혼운",
    title: "우리는 결혼까지 갈 수 있을까?",
    originalPrice: "19,900원",
    discount: "75%",
    finalPrice: "4,900원",
  },
  {
    id: 2,
    image: "/image-2.png",
    category: "💖 연애운",
    title: "그 사람의 진심은 어디쯤일까?",
    originalPrice: "21,000원",
    discount: "77%",
    finalPrice: "4,900원",
  },
  {
    id: 3,
    image: "/image-3.png",
    category: "💖 연애운",
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
];

export default function Card() {
  return (
    <div className="w-[404px] h-[617px]">
      <div className="inline-flex flex-col items-start pt-0 pb-2.5 px-0 relative">
        <Card className="flex-col items-start gap-4 flex-[0_0_auto] bg-white rounded-[10px] inline-flex relative border-0 shadow-none">
          <CardContent className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] p-0">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#161741] text-xl tracking-[-0.20px] leading-[28.4px] whitespace-nowrap">
                타로 베스트
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto] mt-4">
              <div className="inline-flex flex-col min-h-[300px] items-start gap-[26px] relative flex-[0_0_auto]">
                {tarotCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div
                      className="relative w-[121px] h-[104px] z-[1] rounded-[10px] bg-cover bg-[50%_50%]"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />

                    <div className="flex flex-col items-start justify-between pt-0 pb-0.5 px-0 relative flex-1 self-stretch grow z-0">
                      <div className="inline-flex flex-col items-start gap-[6.86px] pl-0 pr-[71.33px] py-0 relative flex-[0_0_auto] mr-[-11.33px]">
                        <Badge className="h-[21px] items-center justify-center gap-[3px] pt-[1.25px] pb-[2.25px] px-1.5 bg-[#dde9ff] rounded-[999px] inline-flex relative border-0 hover:bg-[#dde9ff]">
                          <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#5791ff] text-[10px] tracking-[-0.20px] leading-[15px] whitespace-nowrap">
                            {card.category.includes("💍")
                              ? "💍"
                              : card.category.includes("💖")
                                ? "💖"
                                : ""}
                          </span>
                          <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#5791ff] text-[11px] tracking-[-0.22px] leading-[16.5px] whitespace-nowrap">
                            {card.category
                              .replace("💍 ", "")
                              .replace("💖 ", "")}
                          </span>
                        </Badge>

                        <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#161741] text-base tracking-[0] leading-[22.7px] relative w-fit whitespace-nowrap">
                          {card.title}
                        </div>
                      </div>

                      <div className="inline-flex h-[23px] items-center gap-1 relative overflow-hidden">
                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                          <div className="mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#454567] text-sm tracking-[-0.28px] leading-[21px] line-through relative w-fit whitespace-nowrap">
                            {card.originalPrice}
                          </div>
                        </div>

                        <div className="inline-flex items-start gap-px relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#5791ff] text-lg tracking-[-0.36px] leading-[27px] whitespace-nowrap">
                            {card.discount}
                          </div>

                          <div className="mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#161741] text-lg tracking-[-0.36px] leading-[27px] relative w-fit whitespace-nowrap">
                            {card.finalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="inline-flex h-12 items-center justify-center pl-[179.25px] pr-[179.27px] pt-[11.5px] pb-[12.5px] relative bg-[#5791ff] rounded-[10px] border-0 hover:bg-[#4a7de6] w-full">
                <span className="mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-6 relative w-fit whitespace-nowrap">
                  더보기
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
