import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("id-ID", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} menit baca`;
}

export function slugifyTag(tag: string) {
  return tag
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("id-ID", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = ["Current", "Now", "Present"].includes(endDate) ? "Sekarang" : endDate;
    } else {
      endMonth = endDate.toLocaleString("id-ID", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth} ${startYear} - ${endMonth ? `${endMonth} ${endYear}` : endYear}`;
}