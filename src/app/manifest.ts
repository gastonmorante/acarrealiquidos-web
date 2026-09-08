import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acarrealíquidos S.A. de C.V. | Logística de Líquidos",
    short_name: "Acarrealíquidos",
    description: "45 Años de excelencia en autotransporte terrestre especializado de hidrocarburos, grado alimenticio y químicos corrosivos en México.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    orientation: "portrait",
    icons: [
      {
        src: "/assets/logo.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/assets/logo.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
