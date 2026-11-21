import { describe, expect, it } from "vitest";
import { secondsToTimecode } from "./timecode";

describe("secondsToTimecode", () => {
  it("converts 0 seconds to 00:00:00:00", () => {
    expect(secondsToTimecode(0)).toBe("00:00:00:00");
  });

  it("converts 61.04 seconds at 25 fps to 00:01:01:01", () => {
    expect(secondsToTimecode(61.04)).toBe("00:01:01:01");
  });

  it("converts 3599.96 seconds at 25 fps to 00:59:59:24", () => {
    expect(secondsToTimecode(3599.96)).toBe("00:59:59:24");
  });

  it("clamps negative values to 00:00:00:00", () => {
    expect(secondsToTimecode(-10)).toBe("00:00:00:00");
  });
});
