import { defineField, defineType } from "sanity";

export const servicesType = defineType({
  name: "services",
  title: "Services",
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
            defineField({
              name: "ctaLabel",
              title: "CTA Label",
              type: "string",
            }),
          ],
        },
      ],
      validation: rule =>
        rule.required().min(1).warning("At least one item is required."),
    }),
  ],
});
