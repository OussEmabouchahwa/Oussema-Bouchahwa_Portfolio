import { describe, expect, it } from "vitest";
import { ringRadius } from "./ring";

describe("ringRadius", () => {
  it("calculates ring radius for width 200, count 8", () => {
    const expected = Math.round(100 / Math.tan(Math.PI / 8) + 70);
    expect(ringRadius(200, 8)).toBe(expected);
  });
});
