import { getMediaImages } from "@/lib/media";
import HomeClient from "./HomeClient";

export default function HomePage() {
  const allImages = getMediaImages();
  return <HomeClient allImages={allImages} />;
}
