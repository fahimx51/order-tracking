# Order Tracking Screen

A mobile-first order tracking screen for an e-commerce app. It makes delivery status clear at a glance and adapts to three special situations: a delayed order, a delivered order the customer did not receive, and an order with no tracking yet.

- **Live demo:** https://order-tracking-jade.vercel.app/
- **Repository:** https://github.com/fahimx51/order-tracking

## Tech stack

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS (no custom CSS)
- lucide-react for icons
- Mock data only, no backend

## Setup and run

Requires Node.js 20 or newer.

```bash
git clone https://github.com/fahimx51/order-tracking.git
cd order-tracking
npm install
npm run dev
```

Open http://localhost:3000. For the best view, use browser devtools at 360 to 430px width.

Production build:

```bash
npm run build
npm start
```

## Demo states

The "Demo state" dropdown at the top of the screen (labeled "For evaluators") switches between every scenario using the same screen and components:

| Option | What it shows |
|---|---|
| Delayed | The estimated time has passed. A clear delay message, the new estimate, and next steps. |
| Delivered but not received | The order shows as delivered, with actions to report the missing package or contact support. |
| Tracking unavailable | The order exists but has no tracking yet. Explains when tracking will appear so the screen never looks empty or broken. |
| Load error | Error message with a Retry button. Retry succeeds on the second attempt. |
| No order (empty) | Empty state when there is nothing to track. |

Every switch shows a loading skeleton for about 800ms to simulate a network request.

## Features

- Visual delivery timeline: Processing, Shipped, Out for Delivery, Delivered
- Current status and estimated delivery date/time
- Order and product summary
- View order details, contact support, and report a delivery issue
- Loading, empty, and error states
- Responsive layout for about 360 to 430px mobile widths
- Accessible basics: semantic headings, labeled controls, visible focus rings, `aria-live` for state changes

## Project structure

```
app/
  globals.css          Tailwind import
  layout.tsx           Root layout and metadata
  page.tsx             Screen, demo state selector, loading/error/empty logic
components/order/
  OrderHeader.tsx      Title, order ID, back button, options menu
  StateMessage.tsx     Status message for each scenario
  OrderTimeline.tsx    Delivery progress timeline
  DeliveryInfo.tsx     Estimated delivery details
  OrderSummary.tsx     Product and order details
  SupportActions.tsx   Contact support and report issue actions
  OrderSkeleton.tsx    Loading skeleton
data/
  order.ts             Mock orders, one per scenario
types/
  order.ts             TypeScript types
```

## Design decisions

- **One screen, many states.** A single `state` value drives the whole screen, so the same product experience adapts instead of using separate pages.
- **Status first.** The most important information (current status and estimate) sits at the top, followed by the timeline, then the order details and support actions.
- **Color with meaning, never alone.** Amber marks delay, rose marks a delivery problem, and green marks completion. Every state also has a text label or icon, so it is readable without color.
- **No dead ends.** Every problem state offers a next step (contact support, report an issue, or get updates), and the "tracking unavailable" state explains what happens next.
- **Mobile first.** The card is capped at 430px and centered on larger screens. Text and inputs are sized to avoid the iOS zoom-on-focus problem.
- **Mock data.** All data lives in `data/order.ts`, which keeps the UI components free of data logic.

## Deployment

Deployed on Vercel at https://order-tracking-jade.vercel.app/. Import the GitHub repository, keep the default Next.js settings, and deploy. No environment variables are needed.

## AI usage

AI tools were used during this assessment. The complete prompt history is in [`AI_PROMPT_HISTORY.txt`](./AI_PROMPT_HISTORY.txt).