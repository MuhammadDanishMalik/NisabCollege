import type { Metadata } from "next";
import { getMediaImages } from "@/lib/media";
import PrincipalClient from "./PrincipalClient";

export const metadata: Metadata = {
  title: "Principal's Message | Nisab College Wan Bhachran",
  description:
    "Read the welcome message and institutional vision from Dr. Muhammad Imran, Principal of Nisab College Wan Bhachran.",
};

export default function PrincipalMessagePage() {
  const allImages = getMediaImages();
  const principalImage = allImages[1] || allImages[0] || "";

  return <PrincipalClient principalImage={principalImage} />;
}
