import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteConfig';

export default function SEO({ title, description }) {
  const pageTitle = title
    ? `${title} | ${siteConfig.siteName}`
    : siteConfig.seo.defaultTitle;

  const pageDescription = description || siteConfig.seo.defaultDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={siteConfig.author} />
      <meta name="language" content={siteConfig.language} />
    </Helmet>
  );
}
