import Head from "next/head";
import { siteConfig } from "@/data/siteConfig";

export default function SEO({
  title,
  description,
  noindex = false,
  nofollow = false,
  ogImage,
  canonical,
  children,
}) {
  const pageTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.seo.defaultTitle;
  const pageDescription = description || siteConfig.seo.defaultDescription;
  const pageOgImage = ogImage || siteConfig.seo.ogImage;
  const pageUrl = canonical || siteConfig.siteUrl;

  // Build robots meta content
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
  ].join(", ");

  // JSON-LD Structured Data (Person/Portfolio)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.siteUrl,
    description: siteConfig.siteDescription,
    image: pageOgImage,
    email: `mailto:${siteConfig.contact.email}`,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressCountry: "FR",
    },
    sameAs: [
      siteConfig.socialLinks.github,
      siteConfig.socialLinks.twitter,
      siteConfig.socialLinks.linkedin,
    ],
    jobTitle: "Développeur Web & Designer",
  };

  return (
    <Head>
      {/* Essential Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDescription} />
      <meta name="author" content={siteConfig.author} />
      <meta name="language" content={siteConfig.language} />

      {/* Robots Meta Tag (conditional noindex/nofollow) */}
      <meta name="robots" content={robotsContent} />

      {/* Open Graph Tags (Social Sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={siteConfig.seo.twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
      <meta name="twitter:creator" content={siteConfig.seo.twitterHandle} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* Page Title */}
      <title>{pageTitle}</title>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Additional children elements (if any) */}
      {children}
    </Head>
  );
}
