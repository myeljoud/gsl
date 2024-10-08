import { Play } from "lucide-react";
import { defineField, defineType } from "sanity";

export const videoType = defineType({
  name: "video",
  type: "object",
  title: "Video",
  icon: Play,
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "Lien vidéo",
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url",
    },
  },
});
