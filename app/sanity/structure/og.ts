import type { SanityDocument } from "@sanity/client";
import type { StructureBuilder } from "sanity/structure";

import { OGPreview } from "../components/og-preview";

type DocProps = SanityDocument;

function createOgUrl(doc: DocProps) {
  const remoteUrl = `https://www.maurisante.org`;
  const baseUrl =
    window?.location?.hostname === "localhost" ? window.origin : remoteUrl;
  const urlBase = new URL(baseUrl);
  urlBase.pathname = `/api/og`;
  urlBase.searchParams.set("id", doc._id);

  return urlBase.toString();
}

export const og = (S: StructureBuilder) =>
  S.view
    .component(OGPreview)
    .title("OG Preview")
    .options({
      id: "og",
      url: (doc: DocProps) => createOgUrl(doc),
    });
