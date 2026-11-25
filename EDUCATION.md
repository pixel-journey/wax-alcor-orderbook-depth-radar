# Education — size below a mid and size above it

> **Rung:** `npm test` passes. The book is `SAMPLE_LEVELS`. It is not an Alcor depth snapshot.  
> **The test is the rule.** A walk that pays through asks is [wax-automated-slippage-tolerance-optimizer](https://github.com/pixel-journey/wax-automated-slippage-tolerance-optimizer).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Split bid / ask / at-mid size on the sample book |
| Intermediate | Compute imbalance bps with mid excluded from the denominator |
| Masterclass | Refuse to call this a live Alcor v2/v3 depth feed |

---

## Beginner — one scene

Mid is `100n`.

| Price | Size | Side |
| --- | --- | --- |
| 90 | 20 | bid |
| 95 | 10 | bid |
| 100 | 4 | at the mid — not bid, not ask |
| 110 | 10 | ask |

| Field | Result |
| --- | --- |
| `bid` | `30n` |
| `ask` | `10n` |
| `atMid` | `4n` |
| `imbalanceBps` | `-5000n` |

```bash
npm test
```

---

## Intermediate

Imbalance is `(ask - bid) * 10000 / (bid + ask)`. Mid size is **left out** of the denominator. `(10 - 30) * 10000 / 40` is `-5000`. Negative means more size below the mid.

`sizeByTier(SAMPLE_LEVELS, 5)` is `14n` because both the 95 level and the mid level are tagged 5.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Put mid into bid+ask denominator | not this formula |
| Cite as live Alcor depth | SAMPLE_LEVELS only |
| Call imbalance a trade signal | teaching tag |

### Exercises

1. Bid size on SAMPLE? (**30**.)  
2. Imbalance bps? (**-5000**.)  
3. Is mid in the denominator? (**No**.)

---

## Masterclass

Alcor v3 market APIs are a different surface (vault `ALCOR-API.md`). This file never fetches a book.

---

## What this course will not teach

- Live order-book polling
- Trade routing
- That imbalance is a buy/sell recommendation
