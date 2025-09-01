import fs from 'node:fs/promises';
import path from 'node:path';
import type { CarouselSlide, CardSection, CardItem } from './types';

export async function parseZedi(): Promise<{ slides: CarouselSlide[]; sections: CardSection[] }> {
  const filePath = path.join(process.cwd(), 'zedi-crawl/index.html');
  const html = await fs.readFile(filePath, 'utf8');

  const parser = new DOMParser();
  const document = parser.parseFromString(html, 'text/html');

  const slides: CarouselSlide[] = [];
  document.querySelectorAll('.swiper-slide').forEach((slide) => {
    const imageUrl = slide.querySelector('img')?.getAttribute('src') ?? '';
    const linkUrl = slide.querySelector('a')?.getAttribute('href') ?? '';
    slides.push({ imageUrl, linkUrl });
  });

  const sections: CardSection[] = [];
  document.querySelectorAll('.css-iqgnoi').forEach((section) => {
    const title = section.querySelector('.css-zerbqo')?.textContent?.trim() ?? '';
    const items: CardItem[] = [];
    section.querySelectorAll('.css-yfunor').forEach((item) => {
      const name = item.querySelector('.css-dabu68')?.textContent?.trim() ?? '';
      const price = item.querySelector('.css-e8mbwt')?.textContent?.trim() ?? '';
      if (name) {
        items.push({ name, price });
      }
    });
    sections.push({ title, items });
  });

  return { slides, sections };
}

