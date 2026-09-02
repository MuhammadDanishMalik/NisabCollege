import type { Metadata } from "next";
import { getMediaImages } from "@/lib/media";
import FacilitiesClient from "./FacilitiesClient";

export const metadata: Metadata = {
  title: "Campus Facilities | Nisab College Wan Bhachran",
  description:
    "Explore our world-class medical laboratories, digital library, transport fleet, hospital clinical placements, and student amenities.",
};

export default function FacilitiesPage() {
  const images = getMediaImages();
  return <FacilitiesClient images={images} />;
}
