import { defineField, defineType } from "sanity";

export const partenaireType = defineType({
  name: "partenaire",
  title: "Partenaire",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (rule) => rule.required().warning("Alt text is recommended for accessibility."),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1).warning("At least one image is required."),
    }),
  ],
});
