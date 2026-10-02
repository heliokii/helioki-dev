import fs from "node:fs";
import path from "node:path";
/** Server only: keep the images that actually exist in /public. */
export function existingImages(images: string[]): string[] {
  return images.filter((src) => fs.existsSync(path.join(process.cwd(), "public", src)));
}
