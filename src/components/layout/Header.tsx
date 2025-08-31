import { Bell } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">웹디</div>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </header>
  )
}
