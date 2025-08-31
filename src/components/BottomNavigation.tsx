import Link from "next/link"

const items = [
  { href: "#home", label: "Home" },
  { href: "#cards", label: "Cards" },
  { href: "#profile", label: "Profile" },
]

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background py-2">
      <ul className="flex justify-around">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm font-medium">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
