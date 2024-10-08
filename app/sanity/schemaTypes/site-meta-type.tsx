import { defineField, defineType } from "sanity";

import HeroIcon from "../components/hero-icon";

export const siteMetaType = defineType({
  name: "siteMeta",
  title: "Site meta",
  icon: () => <HeroIcon icon="siteMeta" />,
  type: "document",
  fields: [
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
    }),
    defineField({
      name: "bio",
      type: "portableText",
    }),
    defineField({
      name: "email",
      title: "Email du contact",
      type: "email",
    }),
    defineField({
      name: "phone",
      title: "Numéro de téléphone de contact",
      type: "string",
    }),
  ],
});
