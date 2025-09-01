import fs from "node:fs"
import path from "node:path"

export default function HomePage() {
  const html = fs.readFileSync(path.join(process.cwd(), "zedi-crawl/index.html"), "utf8")
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  const body = bodyMatch ? bodyMatch[1] : html
  return <div dangerouslySetInnerHTML={{ __html: body }} />
}
