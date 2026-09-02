import type { Metadata } from "next";
import { getMediaImages } from "@/lib/media";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Campus Gallery | Nisab College Wan Bhachran",
  description: "A visual tour of student life, campus facilities, and memorable moments at Nisab College Wan Bhachran.",
};

export default function GalleryPage() {
  const images = getMediaImages();
  return <GalleryClient images={images} />;
}
