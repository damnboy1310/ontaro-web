import { Home, Search, User, Settings } from "lucide-react"

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around py-2">
        <button className="flex flex-col items-center py-2 px-3 text-blue-500">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">홈</span>
        </button>
        <button className="flex flex-col items-center py-2 px-3 text-gray-400">
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">검색</span>
        </button>
        <button className="flex flex-col items-center py-2 px-3 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">내정보</span>
        </button>
        <button className="flex flex-col items-center py-2 px-3 text-gray-400">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">설정</span>
        </button>
      </div>
    </nav>
  )
}
