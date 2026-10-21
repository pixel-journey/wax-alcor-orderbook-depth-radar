import { HISTORY_ORIGIN, historyActions } from "./api";
import { SAMPLE_LEVELS, radar } from "./depth";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const view = radar(SAMPLE_LEVELS, 100n);

export const USE_CASES: UseCase[] = [
  {
    title: "Market list, not a radar",
    detail: "GET /api/markets is not tick liquidity. radar() sums the fixture. The request is not sent.",
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
  {
    title: "Transfers on the swap account are not depth",
    detail: `Fixture bid ${view.bid.toString()}, ask ${view.ask.toString()}, imbalance ${view.imbalanceBps.toString()} bps. No order is built.`,
    request: historyActions(HISTORY_ORIGIN, "swap.alcor", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (view.imbalanceBps !== -5000n) throw new Error(String(view.imbalanceBps));
  if (USE_CASES.some((item) => item.transaction)) throw new Error("no order");
}
