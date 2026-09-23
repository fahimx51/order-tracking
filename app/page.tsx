'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, ChevronDown, PackageOpen } from 'lucide-react';

import { OrderState } from '@/types/order';
import { orders } from '@/data/order';
import OrderHeader from '@/components/order/OrderHeader';
import StateMessage from '@/components/order/StateMessage';
import OrderTimeline from '@/components/order/OrderTimeline';
import DeliveryInfo from '@/components/order/DeliveryInfo';
import OrderSummary from '@/components/order/OrderSummary';
import SupportActions from '@/components/order/SupportActions';
import OrderSkeleton from '@/components/order/OrderSkeleton';

type DemoView = OrderState | 'error' | 'empty';
type Phase = 'loading' | 'ready' | 'error' | 'empty';

export default function Home() {
  const [view, setView] = useState<DemoView>('delayed');
  const [attempt, setAttempt] = useState(0);
  const [phase, setPhase] = useState<Phase>('loading');

  // Fake network delay so the loading state is visible
  useEffect(() => {
    const id = setTimeout(() => {
      if (view === 'error' && attempt === 0) setPhase('error');
      else if (view === 'empty') setPhase('empty');
      else setPhase('ready');
    }, 800);

    return () => clearTimeout(id);
  }, [view, attempt]);

  const handleViewChange = (next: DemoView) => {
    setView(next);
    setAttempt(0);
    setPhase('loading');
  };

  const handleRetry = () => {
    setAttempt((count) => count + 1);
    setPhase('loading');
  };

  // After a successful retry of the "error" demo, show a normal order
  const currentState: OrderState =
    view === 'error' || view === 'empty' ? 'delayed' : view;

  const order =
    orders.find((item) => item.state === currentState) ??
    orders[0];

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-6 sm:py-8">
      <div className="mx-auto min-h-[calc(100vh-3rem)] w-full max-w-[430px] overflow-hidden rounded-3xl bg-white shadow-xl sm:min-h-0">
        <OrderHeader orderId={order.id} />

        {/* Development / evaluator state selector */}
        <div className="mx-5 mt-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-3">
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="demo-state"
              className="text-[10px] font-semibold uppercase tracking-wide text-slate-500"
            >
              Demo state
            </label>

            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">
              For evaluators
            </span>
          </div>

          <div className="relative">
            <select
              id="demo-state"
              value={view}
              onChange={(event) =>
                handleViewChange(event.target.value as DemoView)
              }
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3.5 pr-10 text-base font-semibold text-slate-800 shadow-sm outline-none transition hover:border-slate-300 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-200 sm:text-sm"
            >
              <optgroup label="Order scenarios">
                <option value="delayed">Delayed</option>

                <option value="delivered_not_received">
                  Delivered but not received
                </option>

                <option value="tracking_unavailable">
                  Tracking unavailable
                </option>
              </optgroup>

              <optgroup label="Screen states">
                <option value="error">Load error</option>

                <option value="empty">No order (empty)</option>
              </optgroup>
            </select>

            <ChevronDown
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>
        </div>

        <div aria-live="polite">
          {phase === 'loading' && <OrderSkeleton />}

          {phase === 'error' && (
            <div
              role="alert"
              className="mx-5 mb-6 mt-4 rounded-2xl bg-slate-50 p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <AlertCircle size={28} />
              </div>

              <h2 className="mt-4 text-lg font-bold text-slate-900">
                Couldn&apos;t load tracking
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Check your connection and try again.
              </p>

              <button
                type="button"
                onClick={handleRetry}
                className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Retry
              </button>
            </div>
          )}

          {phase === 'empty' && (
            <div className="mx-5 mb-6 mt-4 rounded-2xl bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                <PackageOpen size={28} />
              </div>

              <h2 className="mt-4 text-lg font-bold text-slate-900">
                No order to track
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                When you place an order, you can track it here.
              </p>
            </div>
          )}

          {phase === 'ready' && (
            <>
              <StateMessage state={order.state} />

              {order.state !== 'tracking_unavailable' && (
                <OrderTimeline items={order.timeline} />
              )}

              <DeliveryInfo
                estimatedDelivery={order.estimatedDelivery}
              />

              <OrderSummary order={order} />

              <SupportActions state={order.state} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}