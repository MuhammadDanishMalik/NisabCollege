import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { readFileSync, statSync } from "fs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    // Prevent directory traversal
    const safePath = path.join("/").replace(/\.\./g, "");
    const filePath = join(process.cwd(), "Media-Images", safePath);

    const stat = statSync(filePath);
    if (!stat.isFile()) {
      return new NextResponse("Not found", { status: 404 });
    }

    const fileBuffer = readFileSync(filePath);

    // Determine content type
    const ext = safePath.split(".").pop()?.toLowerCase();
    let contentType = "image/jpeg";
    if (ext === "png") contentType = "image/png";
    else if (ext === "gif") contentType = "image/gif";
    else if (ext === "webp") contentType = "image/webp";
    else if (ext === "svg") contentType = "image/svg+xml";
    else if (ext === "mp4") contentType = "video/mp4";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving media:", error);
    return new NextResponse("Not found", { status: 404 });
  }
}
