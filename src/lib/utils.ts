import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number, suffix = ""): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M${suffix}`;
  if (num >= 1000) return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K${suffix}`;
  return `${num}${suffix}`;
}
