import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { i18n } from '@/i18n.config';

const pages = ['', '/pricing', '/about', '/contact', '/privacy', '/terms', '/dmca'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of i18n.locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteConfig.url}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : page === '/pricing' ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
