import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: "link",
  title: "Lien",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Texte",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reference",
      type: "reference",
      title: "Référence",
      description:
        "Si ce lien comporte une référence et une URL, la référence sera utilisée.",
      to: [{ type: "page" }],
    }),
    defineField({
      name: "link",
      title: "Lien",
      type: "url",
      description: "Doit être une URL complète !",
      validation: (rule) =>
        rule.custom((url) =>
          url && url.startsWith("http://") ?
            "Les liens doivent commencer par https://"
          : true,
        ),
    }),
  ],
  preview: {
    select: {
      title: "text",
      url: "link",
      ref: "reference.slug.current",
    },
    prepare: (selection: { [key: string]: any }) => {
      const { title, url, ref } = selection;

      const subtitle = !url && !ref ? "Lien vide" : ref ?? url;

      return {
        title: title ?? "",
        subtitle,
      };
    },
  },
});
