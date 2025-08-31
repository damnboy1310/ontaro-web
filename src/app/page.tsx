import fs from "fs"
import path from "path"

const htmlPath = path.join(process.cwd(), "zedi-crawl/index.html")
const rawHtml = fs.readFileSync(htmlPath, "utf8")
const body = rawHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? rawHtml

export default function HomePage() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: body }}
      suppressHydrationWarning
    />
  )
}
