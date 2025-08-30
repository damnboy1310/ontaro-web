import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AppSectionItem {
  id: number
  title: string
  subtitle: string
  image: string
  price: string
}

interface AppSectionProps {
  title: string
  items: AppSectionItem[]
  buttonText: string
  buttonColor: string
}

export function AppSection({ title, items, buttonText, buttonColor }: AppSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      <div className="space-y-3">
        {items.map((item) => (
          <Card key={item.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{item.subtitle}</p>
                <div className="text-sm font-semibold text-blue-600">{item.price}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button className={`w-full ${buttonColor} hover:opacity-90 text-white rounded-lg py-3`} variant="default">
        {buttonText}
      </Button>
    </div>
  )
}
