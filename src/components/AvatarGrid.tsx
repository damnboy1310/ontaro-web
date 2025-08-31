import Image from "next/image"

const avatars = ["/next.svg", "/vercel.svg", "/globe.svg", "/window.svg"]

export function AvatarGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {avatars.map((src) => (
        <Image key={src} src={src} alt="" width={64} height={64} className="rounded-full" />
      ))}
    </div>
  )
}
