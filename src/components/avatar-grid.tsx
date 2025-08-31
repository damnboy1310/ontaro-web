"use client"

import { useState } from "react"

const avatars = [
  { id: 1, emoji: "👨", label: "남자", category: "남자" },
  { id: 2, emoji: "💗", label: "하트", category: "감정" },
  { id: 3, emoji: "💖", label: "핑크하트", category: "감정" },
  { id: 4, emoji: "👻", label: "유령", category: "캐릭터" },
  { id: 5, emoji: "💕", label: "하트들", category: "감정" },
  { id: 6, emoji: "❤️", label: "빨간하트", category: "감정" },
  { id: 7, emoji: "🧡", label: "주황하트", category: "감정" },
  { id: 8, emoji: "👨‍💼", label: "직장인", category: "직업" },
  { id: 9, emoji: "👮", label: "경찰", category: "직업" },
  { id: 10, emoji: "🎁", label: "선물", category: "아이템" },
  { id: 11, emoji: "📚", label: "책", category: "아이템" },
  { id: 12, emoji: "🌍", label: "지구", category: "자연" },
]

const categories = ["전체", "남자", "감정", "캐릭터", "직업", "아이템", "자연"]

export function AvatarGrid() {
  const [selectedCategory, setSelectedCategory] = useState("전체")

  const filteredAvatars =
    selectedCategory === "전체" ? avatars : avatars.filter((avatar) => avatar.category === selectedCategory)

  return (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filteredAvatars.map((avatar) => (
          <div
            key={avatar.id}
            className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-2xl mb-2">{avatar.emoji}</div>
            <div className="text-xs text-gray-600">{avatar.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
