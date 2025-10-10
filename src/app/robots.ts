import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.dotoribook.site';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/landing', '/login', '/join'],
        disallow: ['/home', '/archive', '/favorite', '/search', '/book/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
