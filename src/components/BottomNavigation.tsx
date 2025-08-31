export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow md:hidden">
      {/* TODO: Replace placeholder items with real navigation links */}
      <ul className="flex justify-around p-2 text-sm">
        <li>Home</li>
        <li>Search</li>
        <li>Profile</li>
      </ul>
    </nav>
  )
}

