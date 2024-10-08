import { File } from "lucide-react";
import { defineField, defineType } from "sanity";

export const activityType = defineType({
  name: "activity",
  title: "Activité",
  type: "document",
  icon: File,
  fields: [
    defineField({
      name: "unlisted",
      title: "Non listé",
      type: "boolean",
      description: "Cochez-le pour retirer cette page du site Web.",
      initialValue: false,
    }),
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
      name: "releaseDate",
      title: "Date de publication",
      type: "datetime",
      hidden: (props) => Boolean(props?.document?.unlisted),
      validation: (rule) =>
        rule.custom((value, { document }) => {
          if (document?.unlisted) {
            return true;
          }

          return value ? true : "La date de publication est obligatoire !";
        }),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image de couverture",
      validation: (Rule) => Rule.required(),
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
      validation: (rule) =>
        rule.custom((value, { document }) => {
          if (document?.unlisted) {
            return true;
          }

          return value ? true : "Un résumé est obligatoire !";
        }),
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
