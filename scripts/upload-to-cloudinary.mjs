import { v2 as cloudinary } from "cloudinary";
import { readdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

cloudinary.config({
  cloud_name: "gviwofgz",
  api_key: "875122655418657",
  api_secret: "nwUqDsiKiBPGN6V7crFsycIc2-g",
  secure: true,
});

const mediaDir = join(process.cwd(), "Media-Images");
const files = readdirSync(mediaDir);

const validFiles = files.filter((file) => {
  const ext = file.split(".").pop()?.toLowerCase();
  return ["jpg", "jpeg", "png", "webp", "mp4"].includes(ext || "");
});

console.log(`Found ${validFiles.length} media files to process.`);

const results = [];
const mapping = {};

async function uploadFile(filename) {
  const filePath = join(mediaDir, filename);
  const ext = filename.split(".").pop()?.toLowerCase();
  const resourceType = ext === "mp4" ? "video" : "image";
  const cleanId = filename.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_-]/g, "_");

  try {
    const res = await cloudinary.uploader.upload(filePath, {
      folder: "nisab-college",
      public_id: cleanId,
      resource_type: resourceType,
      overwrite: false,
    });
    console.log(`✓ Uploaded: ${filename} -> ${res.secure_url}`);
    return {
      filename,
      publicId: res.public_id,
      secureUrl: res.secure_url,
      resourceType: res.resource_type,
      width: res.width,
      height: res.height,
    };
  } catch (error) {
    console.error(`✗ Error uploading ${filename}:`, error.message);
    return null;
  }
}

// Also upload official logo
async function uploadLogo() {
  const logoPath = join(process.cwd(), "public", "logo.png");
  if (existsSync(logoPath)) {
    try {
      const res = await cloudinary.uploader.upload(logoPath, {
        folder: "nisab-college",
        public_id: "official_logo",
        overwrite: true,
      });
      console.log(`✓ Official logo uploaded: ${res.secure_url}`);
      mapping["logo.png"] = res.secure_url;
      results.push({
        filename: "logo.png",
        publicId: res.public_id,
        secureUrl: res.secure_url,
        resourceType: "image",
      });
    } catch (err) {
      console.error("Error uploading logo:", err.message);
    }
  }
}

async function run() {
  await uploadLogo();

  // Batch upload in parallel chunks of 5
  const chunkSize = 5;
  for (let i = 0; i < validFiles.length; i += chunkSize) {
    const chunk = validFiles.slice(i, i + chunkSize);
    const chunkResults = await Promise.all(chunk.map(uploadFile));
    for (const r of chunkResults) {
      if (r) {
        results.push(r);
        mapping[r.filename] = r.secureUrl;
      }
    }
    console.log(`Progress: ${Math.min(i + chunkSize, validFiles.length)} / ${validFiles.length}`);
  }

  const output = {
    total: results.length,
    uploadedAt: new Date().toISOString(),
    images: results.filter(r => r.resourceType === "image").map(r => r.secureUrl),
    publicIds: results.map(r => r.publicId),
    items: results,
    mapping,
  };

  const outputPath = join(process.cwd(), "src", "lib", "cloudinary-images.json");
  writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");
  console.log(`Saved ${results.length} uploaded Cloudinary assets to ${outputPath}`);
}

run();
