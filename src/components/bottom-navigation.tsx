export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white shadow">
      {/* TODO: Implement bottom navigation based on zedi-crawl markup */}
      <ul className="flex justify-around p-2 text-sm">
        <li>Home</li>
        <li>Search</li>
        <li>Profile</li>
      </ul>
    </nav>
  )
}

