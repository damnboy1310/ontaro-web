import Image from "next/image"

const images = ["/next.svg", "/vercel.svg", "/globe.svg"]

export function Carousel() {
  return (
    <div className="flex gap-4 overflow-x-auto py-4">
      {images.map((src) => (
        <Image key={src} src={src} alt="" width={200} height={120} className="shrink-0 rounded-lg" />
      ))}
    </div>
  )
}
