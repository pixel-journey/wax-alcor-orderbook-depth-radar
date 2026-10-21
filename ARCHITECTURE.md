# Architecture

Sum size below and above a mid and report the imbalance in bps.

The page calls the same functions as the tests. It does not open a socket and it does not sign.

## Live path (not shipped)

A later adapter may perform the request in `src/usecases.ts` and pass parsed fields in as arguments. Until that call is recorded, the numbers on the page are fixtures.
