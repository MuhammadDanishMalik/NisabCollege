import { readdirSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Academic Programs | Nisab College",
  description:
    "Explore all 13 professional programmes at Nisab College Wan Bhachran — Medical, AD/BS, and Professional Degree tracks with full eligibility details.",
};

function getMediaImages(): string[] {
  const mediaDir = join(process.cwd(), "Media-Images");
  try {
    const files = readdirSync(mediaDir);
    return files.filter((file) => {
      const ext = file.split(".").pop()?.toLowerCase();
      return ["jpg", "jpeg", "png", "webp"].includes(ext || "");
    });
  } catch {
    return [];
  }
}

export default function ProgramsPage() {
  const mediaFiles = getMediaImages();
  const images = mediaFiles.map((f) => `/api/media/${encodeURIComponent(f)}`);
  return <ProgramsClient images={images} />;
}
