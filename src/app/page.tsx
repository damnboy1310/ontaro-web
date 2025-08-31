import fs from 'node:fs/promises'
import path from 'node:path'

export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'zedi-crawl', 'index.html')
  const html = await fs.readFile(filePath, 'utf8')
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html
  return <div dangerouslySetInnerHTML={{ __html: body }} />
}
