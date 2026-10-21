/**
 * Split a fixture book into size below the mid and size above it.
 * Tiers are labels. This is not an Alcor depth snapshot.
 */

export type Tier = 5 | 30 | 100;

export type Level = { price: bigint; size: bigint; tierBps: Tier };

export type Radar = { bid: bigint; ask: bigint; atMid: bigint; imbalanceBps: bigint };

const TIERS = new Set<number>([5, 30, 100]);

export function radar(levels: readonly Level[], mid: bigint): Radar {
  if (mid <= 0n) throw new Error("mid must be positive");
  let bid = 0n;
  let ask = 0n;
  let atMid = 0n;
  for (const level of levels) {
    if (level.price <= 0n || level.size <= 0n) throw new Error("price and size must be positive");
    if (!TIERS.has(level.tierBps)) throw new Error("tier must be 5, 30, or 100 bps");
    if (level.price < mid) bid += level.size;
    else if (level.price > mid) ask += level.size;
    else atMid += level.size;
  }
  const sided = bid + ask;
  if (sided === 0n) throw new Error("no size off the mid");
  return { bid, ask, atMid, imbalanceBps: ((ask - bid) * 10_000n) / sided };
}

export function sizeByTier(levels: readonly Level[], tier: Tier): bigint {
  return levels.filter((level) => level.tierBps === tier).reduce((sum, level) => sum + level.size, 0n);
}

export const SAMPLE_LEVELS: Level[] = [
  { price: 90n, size: 20n, tierBps: 30 },
  { price: 95n, size: 10n, tierBps: 5 },
  { price: 100n, size: 4n, tierBps: 5 },
  { price: 110n, size: 10n, tierBps: 100 },
];
