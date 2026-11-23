# AI handoff — orderbook depth radar

## Non-negotiables

1. Imbalance compares size **below** a mid with size **above** it.
2. Size sitting on the mid is **not** added to either side.
3. This is **not** `GET /api/v3/market/depth`, not `/api/v2/tickers/<id>/orderbook`, and not the top-20 book from `/api/v3/market/orderbooks/<id>`.
4. Arguments only. A pasted book is still not fetched by this repo.
5. The comparison ports once the caller has already summed the two sides. This lab will not sum them for you.
6. v2 still hosted; v3 preferred for new clients. No Alcor MCP.

## Prompt seeds

- "Mid size present — which side receives it?"
- "User pastes v3 depth JSON — refuse to claim this lab fetched it."
- "Contrast with live GET /api/v3/market/depth without adding a network call here."

## Do not

- Add mid size to both sides.
- Authorize trades from imbalance numbers.
- Invent an Alcor MCP.
