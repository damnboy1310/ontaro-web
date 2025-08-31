"use client"

import type React from "react"

import { Card } from "@/components/ui/Card"
import { useState, useEffect } from "react"

const carouselData = [
  {
    title: "젠디 어플 리뷰 남기고",
    subtitle: "+500 ZEN 받자!",
    icon: "💎",
    bgGradient: "from-blue-400 to-blue-600",
  },
  {
    title: "친구 초대하고",
    subtitle: "+1000 ZEN 받자!",
    icon: "👥",
    bgGradient: "from-purple-400 to-purple-600",
  },
  {
    title: "일일 출석체크하고",
    subtitle: "+200 ZEN 받자!",
    icon: "📅",
    bgGradient: "from-green-400 to-green-600",
  },
]

export function ZenPointsCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length)
    }, 3000) // 3초마다 자동 슬라이드

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false)
    const touch = e.touches[0]
    const startX = touch.clientX

    const handleTouchMove = (e: TouchEvent) => {
      const currentX = e.touches[0].clientX
      const diff = startX - currentX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left - next slide
          setCurrentIndex((prev) => (prev + 1) % carouselData.length)
        } else {
          // Swipe right - previous slide
          setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length)
        }
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleTouchEnd)
        setTimeout(() => setIsAutoPlaying(true), 5000) // Resume auto-play after 5s
      }
    }

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
      setTimeout(() => setIsAutoPlaying(true), 2000) // Resume auto-play after 2s
    }

    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleTouchEnd)
  }

  const currentSlide = carouselData[currentIndex]

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <Card
        className={`bg-gradient-to-br ${currentSlide.bgGradient} text-white p-6 rounded-2xl transition-all duration-500 ease-in-out cursor-pointer`}
        onTouchStart={handleTouchStart}
        onClick={() => {
          setIsAutoPlaying(false)
          setCurrentIndex((prev) => (prev + 1) % carouselData.length)
          setTimeout(() => setIsAutoPlaying(true), 3000)
        }}
      >
        <div className="text-center space-y-4">
          <div className="text-lg font-medium">{currentSlide.title}</div>
          <div className="text-2xl font-bold">{currentSlide.subtitle}</div>
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center">
                <div className="text-2xl">{currentSlide.icon}</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 3000)
            }}
          />
        ))}
      </div>
    </div>
  )
}
