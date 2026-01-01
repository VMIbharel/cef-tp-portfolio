export const siteConfig = {
  // Site Information
  siteName: "John Doe",
  siteDescription: "Développeur Web & Designer créatif spécialisé dans la création de solutions web modernes et performantes.",
  siteUrl: "https://johndoe.com",
  author: "John Doe",
  language: "fr",

  // Contact Information
  contact: [
    { label: "email", value: "john.doe@gmail.com" },
    { label: "phone", value: "10 20 30 40 50" },
    { label: "address", value: "40 rue Laure Diebold, 69009 Lyon, France" },
  ],

  // Social Media URLs
  socialLinks: [
    { icon: "github", url: "https://github.com/john-doe", label: "GitHub" },
    { icon: "twitter", url: "https://twitter.com/john-doe", label: "Twitter" },
    { icon: "linkedin", url: "https://linkedin.com/in/john-doe", label: "LinkedIn" },
  ],

  // SEO Default Values
  seo: {
    defaultTitle: "John Doe - Développeur Web & Designer",
    defaultDescription: "Développeur Web & Designer créatif spécialisé dans la création de solutions web modernes et performantes.",
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@john-doe",
    twitterCard: "summary_large_image",
  },

  // Navigation Items
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
};
