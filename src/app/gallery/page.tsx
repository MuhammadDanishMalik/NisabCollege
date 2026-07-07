import { readdirSync } from "fs";
import { join } from "path";
import GalleryClient from "./GalleryClient";

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

export const metadata = {
  title: "Gallery | Nisab College",
  description: "Explore campus life, facilities, and memorable moments at Nisab College Wan Bhachran.",
};

export default function GalleryPage() {
  const mediaFiles = getMediaImages();
  const images = mediaFiles.map((f) => `/api/media/${encodeURIComponent(f)}`);

  return <GalleryClient images={images} />;
}
