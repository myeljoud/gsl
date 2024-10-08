import { Link } from "lucide-react";
import { defineField, defineType } from "sanity";

export const buttonType = defineType({
  name: "button",
  title: "Bouton",
  type: "object",
  icon: Link,
  fields: [defineField({ name: "link", type: "link" })],
  preview: {
    select: {
      title: "link.text",
      url: "link.link",
      ref: "link.reference.slug.current",
    },
    prepare: (selection: { [key: string]: any }) => {
      const { title, url, ref } = selection;

      return {
        title,
        subtitle: ref ?? url,
        media: Link,
      };
    },
  },
});
