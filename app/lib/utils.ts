import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addSpacesToPhoneNumber(phone: string) {
  if (!phone || typeof phone !== "string") return "";

  return phone.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}
