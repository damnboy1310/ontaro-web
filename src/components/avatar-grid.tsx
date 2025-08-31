export function AvatarGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* TODO: Implement avatar grid based on zedi-crawl markup */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-16 w-16 rounded-full bg-gray-200" />
      ))}
    </div>
  )
}

