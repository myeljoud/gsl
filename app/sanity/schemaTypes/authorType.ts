import { Users } from "lucide-react";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Auteur",
  type: "document",
  icon: Users,
  fields: [
    defineField({
      name: "name",
      title: "Nom et prénom",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug (Utilisé dans l'URL)",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "image",
      title: "Image de l'auteur",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
