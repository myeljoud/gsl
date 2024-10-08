import { Image } from "lucide-react";
import type { Rule } from "sanity";
import { defineType } from "sanity";

export const portableTextType = defineType({
  name: "portableText",
  type: "array",
  title: "Content",
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normale", value: "normal" },
        { title: "Titre 1", value: "h1" },
        { title: "Titre 2", value: "h2" },
        { title: "Titre 3", value: "h3" },
        { title: "Titre 4", value: "h4" },
        { title: "Citation", value: "blockquote" },
      ],
      lists: [
        { title: "Puces", value: "bullet" },
        { title: "Nombre", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule: Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
          {
            name: "reference",
            type: "reference",
            to: [{ type: "page" }],
            options: { modal: { width: "large" } },
          },
        ],
      },
    },
    { type: "image", icon: Image },
    { type: "button" },
    { type: "video" },
  ],
});
