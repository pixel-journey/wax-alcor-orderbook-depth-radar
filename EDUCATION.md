# Education — size below a mid and size above it

> **Rung:** `npm test` passes. The book is `SAMPLE_LEVELS`. It is not an Alcor depth snapshot.  
> **The test is the rule.** A walk that pays through asks is [wax-automated-slippage-tolerance-optimizer](https://github.com/pixel-journey/wax-automated-slippage-tolerance-optimizer).

## Predict, then run

Mid is `100n`.

| Price | Size | Side |
| --- | --- | --- |
| 90 | 20 | bid |
| 95 | 10 | bid |
| 100 | 4 | at the mid. Not bid and not ask. |
| 110 | 10 | ask |

| Field | Result |
| --- | --- |
| `bid` | `30n` |
| `ask` | `10n` |
| `atMid` | `4n` |
| `imbalanceBps` | `-5000n` |

The imbalance is `(ask - bid) * 10000 / (bid + ask)`. The mid size is left out of that denominator. `(10 - 30) * 10000 / 40` is `-5000`. Negative means more size below the mid. `sizeByTier(SAMPLE_LEVELS, 5)` is `14n` because both the 95 level and the mid level are tagged 5.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this split.
