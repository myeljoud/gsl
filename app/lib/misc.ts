import ImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { projectDetails } from "~/sanity/project-details";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const urlFor = (source: SanityImageSource) =>
  ImageUrlBuilder(projectDetails()).image(source);

/**
 * @returns domain URL (without a ending slash, like: https://kentcdodds.com)
 * https://github.com/kentcdodds/kentcdodds.com/blob/main/app/utils/misc.tsx
 */
export function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

export function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

// If we're using hashes to scroll to it can be problematic if the id starts with a number
export function scrollableKey(key: string) {
  return `s-${key}`;
}
