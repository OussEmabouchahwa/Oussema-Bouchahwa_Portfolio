/**
 * Computes 3D poster ring radius given slot width, item count, and extra factor.
 * Formula: (width / 2) / Math.tan(Math.PI / count) + extra * width
 */
export function ringRadius(width: number, count: number, extra: number = 0.35): number {
  if (count <= 0 || width <= 0) return 0;
  const base = width / 2 / Math.tan(Math.PI / count);
  return Math.round(base + extra * width);
}
