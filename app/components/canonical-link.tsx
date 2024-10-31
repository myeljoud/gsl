import { useLocation } from "@remix-run/react";

import { removeTrailingSlash } from "~/lib/misc";

export function CanonicalLink({ origin }: { origin: string }) {
  const { pathname } = useLocation();
  const canonicalUrl = removeTrailingSlash(`${origin}${pathname}`);

  return <link rel="canonical" href={canonicalUrl} />;
}
