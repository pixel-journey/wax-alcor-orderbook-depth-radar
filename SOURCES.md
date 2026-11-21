# Sources

| Source | Use |
| --- | --- |
| [docs.alcor.exchange/api](https://docs.alcor.exchange/api) | v3 `GET /api/v3/market/depth` and v3 order book tops. This lab returns neither |
| [SECURITY.md](SECURITY.md) | Mid size is left out of the imbalance |

## Product facts

- Imbalance compares size **below** a mid with size **above** it.
- Size sitting on the mid is not added to either side.
- That is not `GET /api/v3/market/depth`, not `/api/v2/tickers/<id>/orderbook`, and not the top-20 book from `/api/v3/market/orderbooks/<id>`.
- Arguments only. A pasted book is still not fetched by this repo.
- The comparison ports to any chain's book once the caller has already summed the two sides. This lab will not sum them for you.

## Alcor HTTP (this lab does not call it)

The `v2` in the repository name is historical. It is not the HTTP version, and it is not an instruction to keep a new client on `/api/v2`.

[docs.alcor.exchange/api](https://docs.alcor.exchange/api) is the reference. Checked against that index:

| Job | Call | Status |
| --- | --- | --- |
| New token, pool, price, depth | `https://<chain>.alcor.exchange/api/v3/market/...` | Preferred |
| Live updates | `wss://<chain>.alcor.exchange/api/v3/market/stream` | Preferred over polling |
| TVL, volume, scores | `/api/v3/analytics/...` on the same chain host | Preferred |
| Cross-chain feed | `https://api.alcor.exchange/v3/feed/...` | Ids include `wax`, `eos`, `telos`, or `xpr` |
| Spot pairs, tickers, candles, AMM lists | `/api/v2/pairs`, `/api/v2/tickers`, `/api/v2/amm/...` | **Still hosted.** Not what this lab uses |

`<chain>` is `wax`, `eos`, `telos`, or `proton`. `https://alcor.exchange/api/` redirects to WAX. The XPR feed prefix is `xpr`, not `proton`.

Token id is `<symbol>-<contract>` lowercase (`wax-eosio.token`, `tlm-alien.worlds`). On-chain, the market row's `base_token` is the **API target** (the quote). `quote_token` is the API base.

v2 errors are plain text. v3 errors are `{"error":"..."}`.

| Chain | Spot contract | AMM contract |
| --- | --- | --- |
| WAX | `alcordexmain` | `swap.alcor` |
| EOS | `eostokensdex` | `swap.alcor` |
| Telos | `eostokensdex` | `swap.alcor` |
| XPR | `alcor` | `swap.alcor` |

The same AMM account name is not the same table. Integer rules in this lab do port. Those account names do not.

WharfKit, if a later host signs: [wharfkit/skill](https://github.com/wharfkit/skill) (`git clone https://github.com/wharfkit/skill.git ~/.claude/skills/wharfkit`). There is no Alcor MCP to install. Do not invent one.

