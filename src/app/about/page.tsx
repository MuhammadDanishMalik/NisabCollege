import type { Metadata } from "next";
import { getMediaImages } from "@/lib/media";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Nisab College",
  description: "Learn more about the vision, mission, and leadership of Nisab College.",
};

export default function AboutPage() {
  const allImages = getMediaImages();
  const missionImage = allImages[2] || allImages[0] || "";
  const visionImage = allImages[4] || allImages[1] || "";

  return <AboutClient missionImage={missionImage} visionImage={visionImage} />;
}
