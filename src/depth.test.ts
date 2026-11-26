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

  it("leaves mid size out of the imbalance denominator", () => {
    // (10 - 30) * 10000 / 40 = -5000; atMid 4 is not in the 40
    const view = radar(SAMPLE_LEVELS, 100n);
    expect(view.bid + view.ask).toBe(40n);
    expect(view.atMid).toBe(4n);
  });

  it("refuses non-positive mid", () => {
    expect(() => radar(SAMPLE_LEVELS, 0n)).toThrow(/mid must be positive/);
    expect(() => radar(SAMPLE_LEVELS, -1n)).toThrow(/mid must be positive/);
  });

  it("refuses non-positive price or size", () => {
    expect(() =>
      radar([{ price: 0n, size: 1n, tierBps: 5 }], 100n),
    ).toThrow(/price and size must be positive/);
    expect(() =>
      radar([{ price: 90n, size: 0n, tierBps: 5 }], 100n),
    ).toThrow(/price and size must be positive/);
  });

  it("refuses tier outside 5, 30, 100", () => {
    expect(() =>
      radar([{ price: 90n, size: 1n, tierBps: 10 as 5 }], 100n),
    ).toThrow(/tier must be 5, 30, or 100/);
  });

  it("refuses a book with no size off the mid", () => {
    expect(() =>
      radar([{ price: 100n, size: 4n, tierBps: 5 }], 100n),
    ).toThrow(/no size off the mid/);
  });

  it("sizeByTier sums only matching tiers", () => {
    expect(sizeByTier(SAMPLE_LEVELS, 30)).toBe(20n);
    expect(sizeByTier(SAMPLE_LEVELS, 100)).toBe(10n);
  });
});
