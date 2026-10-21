import { describe, expect, it } from "vitest";
import { SAMPLE_LEVELS, radar, sizeByTier } from "./depth";

describe("depth split", () => {
  it("sums size below and above the mid", () => {
    const view = radar(SAMPLE_LEVELS, 100n);
    expect(view.bid).toBe(30n);
    expect(view.ask).toBe(10n);
    expect(view.atMid).toBe(4n);
    expect(view.imbalanceBps).toBe(-5000n);
    expect(sizeByTier(SAMPLE_LEVELS, 5)).toBe(14n);
  });
});
