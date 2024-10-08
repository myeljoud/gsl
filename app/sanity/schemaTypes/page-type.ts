import { File } from "lucide-react";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: File,
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (Utilisé dans l'URL)",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image de couverture",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "summary",
      title: "Résumé",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "content",
      title: "Contenu",
      type: "portableText",
    }),
    defineField({
      type: "seo",
      name: "seo",
      title: "SEO",
    }),
  ],
  preview: {
    select: {
      title: "title",
      artist: "artist.name",
      media: "image",
    },
    prepare({ title, artist, media }) {
      return {
        title,
        subtitle: artist,
        media,
      };
    },
  },
});
