import fs from "fs"
import path from "path"

const htmlFilePath = path.join(process.cwd(), "zedi-crawl", "index.html")
const rawHtml = fs.readFileSync(htmlFilePath, "utf8")
const bodyContent = rawHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? ""

export default function HomePage() {
  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
}
