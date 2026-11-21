/**
 * Converts seconds to SMPTE timecode HH:MM:SS:FF at a given frame rate (default 25 fps).
 * Negative values clamp to 0. Calculated from total frames to prevent floating-point drift.
 */
export function secondsToTimecode(sec: number, fps: number = 25): string {
  const safeSec = Math.max(0, sec);
  const totalFrames = Math.round(safeSec * fps);

  const ff = totalFrames % fps;
  const totalSeconds = Math.floor(totalFrames / fps);
  const ss = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const mm = totalMinutes % 60;
  const hh = Math.floor(totalMinutes / 60);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
}
