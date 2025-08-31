export function AvatarGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="aspect-square rounded-full bg-gray-200"
        />
      ))}
    </div>
  )
}

