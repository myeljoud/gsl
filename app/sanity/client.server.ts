import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "~/sanity/project-details";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});
