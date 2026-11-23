# Security — orderbook depth radar

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Size below mid vs above mid | imbalance |
| Size on the mid | **excluded** from both sides |
| Network | not called |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Live depth | Prefer `GET /api/v3/market/depth` outside this package |
| Trade authorization | Imbalance is not a signal to trade |

## Attack angles

1. Adding mid size to both sides.  
2. Claiming v3 depth was fetched by this lab.  
3. Authorizing trades from imbalance alone.

## Honesty limits

Arguments only. Caller must already sum the two sides.

[docs.alcor.exchange/api](https://docs.alcor.exchange/api)
