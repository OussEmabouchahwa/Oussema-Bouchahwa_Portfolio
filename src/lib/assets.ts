import fs from "node:fs";
import path from "node:path";

/**
 * Checks whether an asset file exists in the public directory at build time.
 * Server-only helper.
 */
export function assetExists(assetRelativePath: string): boolean {
  if (!assetRelativePath) return false;
  const cleanPath = assetRelativePath.replace(/^\/+/, "");
  const fullPath = path.join(process.cwd(), "public", cleanPath);
  return fs.existsSync(fullPath);
}
