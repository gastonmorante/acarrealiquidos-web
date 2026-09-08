import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acarrea Líquidos | Transporte Especializado en Autotanques",
    short_name: "Acarrea Líquidos",
    description: "Transporte especializado de grado alimenticio, alcoholes, solventes y soluciones multimodales bajo normas SICT.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8ff",
    theme_color: "#001557",
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
