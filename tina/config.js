import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // La branche Git principale
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // ID client obtenu sur Tina Cloud
  token: process.env.TINA_TOKEN, // Jeton d'accès obtenu sur Tina Cloud
  build: {
    outputFolder: "admin", // Répertoire pour l'interface TinaCMS
    publicFolder: "public", // Répertoire public pour les médias
  },
  media: {
    tina: {
      mediaRoot: "assets/images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "articles",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "author",
            label: "Auteur",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Extrait",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/articles/${document._sys.filename}`,
        },
      },
    ],
  },
});
