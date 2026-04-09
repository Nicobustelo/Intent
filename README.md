# Intent

Intent is wallet infrastructure for Stellar focused on removing the two biggest UX breaks in crypto payments:

- users needing XLM to pay network fees
- users needing an already-activated wallet before receiving funds

The current repository contains:

- a Next.js 16 marketing landing page that explains the product
- a Rust/Soroban workspace with an `intent-engine` contract crate

## Product Overview

Intent is positioned as an agent-driven payment layer for Stellar that helps teams ship smoother wallet and payment experiences.

Core product themes reflected in the landing page:

- Gasless payments: users transact in stablecoins while Intent handles the XLM fee requirement in the background.
- Automatic wallet activation: when the destination account does not exist yet, Intent funds the minimum balance, creates the account, sets trustlines, and completes the transfer.
- Builder-first integration: the product is presented as SDK-driven, composable, and type-safe.
- Stack-agnostic adoption: the landing describes compatibility with embedded wallets, external wallets, payment flows, and different application types.

## What The Landing Page Communicates

The home page is a long-scroll marketing experience built around these sections:

1. Hero
   "Create Gasless Apps. We handle fees."

2. Problem / positioning
   Intent is introduced as an agent-driven payment layer for Stellar that hides fee and activation complexity from end users.

3. Gasless stablecoin flows
   The landing explains that users can transact in USDC or other stablecoins while an agent swaps just enough value into XLM to cover network costs.

4. Activation before delivery
   The landing explains that sending to a brand-new Stellar wallet should still work by provisioning the minimum balance, creating the account, setting trustlines, and delivering the asset in one flow.

5. Builder experience
   A code sample presents an `@intent/sdk` integration flow with payment creation, fee sponsorship, and embedded onboarding.

6. Integrations
   The site presents Intent as compatible with:
   - embedded wallet flows
   - auth and social entry points
   - browser, mobile, and hardware wallets
   - on-ramp, off-ramp, and P2P payment flows
   - consumer, enterprise, and agentic applications

7. CTA
   The final call to action sends users to `hello@intent.dev` for early access.

## Repository Scope Today

This repository currently includes two main areas:

### 1. Frontend landing page

Implemented as a Next.js App Router app in `src/`.

Key files:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/navbar.tsx`
- `src/components/problem-section.tsx`
- `src/components/gasless-section.tsx`
- `src/components/activation-section.tsx`
- `src/components/builders-section.tsx`
- `src/components/integrations-section.tsx`
- `src/components/cta-section.tsx`
- `src/components/footer.tsx`
- `src/components/ui/hero-dithering-card.tsx`

### 2. Smart contracts workspace

Implemented as a Rust workspace at the repository root:

- `Cargo.toml`
- `contracts/engine/Cargo.toml`
- `contracts/engine/src/lib.rs`
- `contracts/engine/src/test.rs`
- `contracts/engine/Makefile`

The existing contract crate is named `intent-engine` and currently contains a basic Soroban placeholder contract with a `hello` method plus a small unit test. It is the starting point for on-chain logic, not a production-ready protocol yet.

## Backend Status

The product copy talks about agent behavior, fee abstraction, onboarding, and wallet activation, but there is currently no dedicated backend implementation committed in this repository yet.

At the moment, this repo does not include:

- Next.js API routes in `src/app/api`
- authentication providers
- database or ORM setup
- Supabase, Prisma, Drizzle, Clerk, or NextAuth integration
- on-chain/off-chain orchestration services inside the web app codebase

So the backend and agent layer are currently represented in the landing page as product behavior, while the actual committed code in this repo is frontend plus an initial Soroban contract workspace.

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- `lucide-react`
- `@paper-design/shaders-react`

### Contracts

- Rust 2021
- Soroban SDK 25

## Project Structure

```text
.
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   `-- icon.svg
|   `-- components/
|       |-- activation-section.tsx
|       |-- builders-section.tsx
|       |-- cta-section.tsx
|       |-- footer.tsx
|       |-- gasless-section.tsx
|       |-- integrations-section.tsx
|       |-- navbar.tsx
|       |-- problem-section.tsx
|       `-- ui/
|           `-- hero-dithering-card.tsx
|-- contracts/
|   `-- engine/
|       |-- Cargo.toml
|       |-- Makefile
|       `-- src/
|           |-- lib.rs
|           `-- test.rs
|-- Cargo.toml
`-- package.json
```

## Frontend Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run build
npm start
npm run lint
```

## Contract Development

The Soroban contract workspace lives at the repository root and currently includes the `contracts/engine` crate.

From `contracts/engine`, the available Make targets are:

```bash
make build
make test
make fmt
make clean
```

Notes:

- `make build` uses `stellar contract build`
- `make test` runs `cargo test`
- you will need the Rust toolchain and Stellar CLI installed to work with the contract locally

## Current Direction

Intent is currently documented in this repository as a Stellar-focused wallet and payments product with three main promises:

- stablecoin-native gasless transactions
- automatic wallet activation and trustline setup
- a developer-friendly integration surface for real product teams

The marketing site is already aligned around that story, while the on-chain contract workspace is still at an early scaffold stage and the backend/agent services are not yet part of the committed application code.
