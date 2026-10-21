"use client";

import { SAMPLE_LEVELS, radar, sizeByTier } from "./depth";

export function Demo() {
  const view = radar(SAMPLE_LEVELS, 100n);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Size below the mid, size above it</h1>
      <p className="lede">
        Mid is 100. Tiers 5, 30, and 100 are labels on the fixture, not Alcor fee pools. A negative imbalance means more size on the bid.
      </p>
      <table>
        <caption>Fixture levels</caption>
        <thead>
          <tr>
            <th>Price</th>
            <th>Size</th>
            <th>Tier bps</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_LEVELS.map((level) => (
            <tr key={`${level.price}-${level.tierBps}`}>
              <td>{level.price.toString()}</td>
              <td>{level.size.toString()}</td>
              <td>{level.tierBps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Bid {view.bid.toString()}, ask {view.ask.toString()}, at mid {view.atMid.toString()}. Imbalance {view.imbalanceBps.toString()} bps. Tier 5 size {sizeByTier(SAMPLE_LEVELS, 5).toString()}.
      </p>
    </main>
  );
}
