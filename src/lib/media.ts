import cloudinaryData from "./cloudinary-images.json";

export const CLOUDINARY_IMAGES: string[] = cloudinaryData.images || [];

export const OFFICIAL_LOGO_URL =
  cloudinaryData.mapping?.["logo.png"] ||
  "https://res.cloudinary.com/gviwofgz/image/upload/v1788289326/nisab-college/official_logo.png";

export function getMediaImages(): string[] {
  if (CLOUDINARY_IMAGES.length > 0) {
    return CLOUDINARY_IMAGES;
  }
  return [];
}

export function getCloudinaryAsset(filename: string, fallbackUrl?: string): string {
  if (cloudinaryData.mapping && filename in cloudinaryData.mapping) {
    return (cloudinaryData.mapping as Record<string, string>)[filename];
  }
  return fallbackUrl || filename;
}
