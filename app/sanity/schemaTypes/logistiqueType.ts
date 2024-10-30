import { defineField, defineType } from "sanity";

export const logistiqueType = defineType({
  name: "logistique",
  title: "Logistique",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "img",
              title: "Image",
              type: "image",
              
            }),
            defineField({
              name: "header",
              title: "Header",
              type: "string",
            }),
            defineField({
              name: "paragraph",
              title: "Paragraph",
              type: "text",
            }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1).warning("At least one item is required."),
    }),
  ],
});
