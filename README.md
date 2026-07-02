# wax-alcor-orderbook-depth-radar — Alcor Orderbook Depth Radar

> **Status:** 🔒 Private (In Development) | Target Public Release: August 2026  
> **Category:** Advanced DeFi & Concentrated Liquidity Visualizers (Alcor v2)  
> **Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** A high-fidelity radar plot visualizing concentrated liquidity density directly surrounding the active spot price across multiple competing fee tiers on WAX Alcor.

---

## 1. Overview & Goal

This blueprint provides an elegant, real-time radar / spider chart visualization that renders the current concentrated liquidity distribution (depth) in a 360° view centered on the live spot price, with separate layers or colors for each fee tier (0.05%, 0.30%, 1.00%) on Alcor v2 pools.

**Why it matters:**
- Traders and LPs on Alcor need instant intuition for where liquidity is concentrated relative to current price — especially in volatile gaming token pairs.
- Radar view makes it easy to spot "thin" sides of the book or asymmetric liquidity that affects slippage and manipulation risk.
- Purely public data from Alcor APIs + on-chain parsing.

**Target users:** Active Alcor traders, LP managers, market makers, game token analysts.

**Success metrics:**
- Smooth 60fps radar animation even on mobile
- Accurate depth aggregation matching Alcor UI
- Educational tooltips explaining tick math and fee tier implications
- Sub-1.5s initial load

---

## 2. Concepts & Inspiration

**Core concepts:**
- Alcor v2 uses concentrated liquidity with ticks (like Uniswap v3). Liquidity is provided in specific price ranges (tick ranges).
- Orderbook depth = sum of liquidity available at each price level around spot.
- Fee tiers create separate "books" with different liquidity profiles.

**Pain points addressed:**
- Traditional depth charts are linear and hard to compare multiple fee tiers at a glance.
- Radar gives holistic, symmetric view perfect for spotting imbalances.

**Inspirations:**
- TradingView orderbook heatmaps and depth charts
- Radar/spider charts in gaming stat dashboards and financial risk visualizers
- Related blueprints: `wax-alcor-v2-liquidity-density-heatmap`, `wax-v2-concentrated-range-efficiency-plot`, `wax-lp-impermanent-loss-heat-map`

---

## 3. Design Specifications (Pixel Journey Standards)

### 3.1 Visual & Interaction Design
- Centered radar chart with live spot price as the "north" reference.
- Concentric rings or color gradients showing liquidity density per fee tier.
- Subtle pulsing animation on active liquidity.
- Clean modern dark theme with fee-tier specific colors (e.g., low fee = emerald, mid = amber, high = indigo).
- Micro-interactions: Hover on radar segment shows exact liquidity amount, price range, and estimated slippage impact.

### 3.2 Key Views / Components
- `OrderbookRadar.tsx` — Main D3 or Recharts radar/spider with multiple series (one per fee tier)
- `LivePriceHeader.tsx` — Prominent display of current spot + 24h change + selected pool
- `FeeTierLegend.tsx` — Toggleable layers for each fee tier with volume stats
- `ImpactSimulator.tsx` — Optional sidebar: "What if I swap X tokens?" showing projected slippage on the radar
- `PoolSelector.tsx` — Quick switch between popular Alcor pairs

### 3.3 Accessibility & Performance
- WCAG AA with pattern fills + color
- Keyboard accessible controls
- High performance Canvas fallback for radar if Recharts too heavy
- Reduced motion support

---

## 4. Technical Architecture

### 4.1 Core Tech Stack
- Next.js 15 + TypeScript + Tailwind + shadcn/ui + framer-motion
- Recharts or custom D3/Canvas for radar
- @tanstack/react-query for live data
- @wharfkit/session for optional simulation tx
- Public Alcor endpoints for current orderbook / liquidity data

### 4.2 Data Flow
User selects pool → Fetch current liquidity distribution per tick range per fee tier from Alcor public API → Aggregate into angular sectors around spot price → Render radar with live updates via polling or WebSocket if available.

### 4.3 Folder Structure
Similar to other Alcor blueprints: components/radar/, hooks/useAlcorOrderbook.ts, lib/wax/alcor-depth-parser.ts, types/.

---

## 5. Implementation Examples
Core parser for depth aggregation and radar data transformation (client-side).

## 6. Demo & Testing
Mock mode with realistic WAX gaming pair depth profiles. Live toggle. E2E tests for interaction.

## 7. Roadmap
Phase 0: Scaffold + radar component
Phase 1: Data layer + accurate aggregation
Phase 2: Polish, simulation tool, export
Phase 3: Release prep

## 8. Visual References
The radar should feel like a futuristic trading terminal meets a clean gaming HUD — beautiful, information-dense, instantly readable.

## 9. Related Blueprints
`wax-alcor-v2-liquidity-density-heatmap`, `wax-alcor-v2-range-optimizer`, `wax-lp-behavioral-profiler`, `wax-market-cap-bubble`

## 10. License & Credits
MIT. Built for WAX public infrastructure. Pixel Journey standards.

**Pixel Journey — Beautiful interfaces for public blockchain data.**