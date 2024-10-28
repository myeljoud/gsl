import { frFRLocale } from "@sanity/locale-fr-fr";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

import { STUDIO_BASEPATH } from "~/sanity/constants";
import { projectDetails } from "~/sanity/project-details";
import schema from "~/sanity/schemaTypes";
// import { defaultDocumentNode, structure } from "./app/sanity/structure";
import { defaultDocumentNode, structure } from "~/sanity/structure";

export default defineConfig({
  ...projectDetails(),
  name: "gsl-admin",
  title: "Gsl Admin",
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
    }),
    visionTool(),
    frFRLocale(),
    media(),
  ],
  basePath: STUDIO_BASEPATH,
  schema: {
    types: schema,
  },
});
