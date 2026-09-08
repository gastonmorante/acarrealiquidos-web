import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://acarrealiquidos.com.mx";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          "x-default": `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
      alternates: {
        languages: {
          es: `${baseUrl}/`,
          en: `${baseUrl}/en`,
          "x-default": `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/aviso-de-privacidad`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/aviso-de-privacidad`,
          en: `${baseUrl}/en/privacy-policy`,
        },
      },
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/terminos-y-condiciones`,
          en: `${baseUrl}/en/terms-and-conditions`,
        },
      },
    },
  ];
}
