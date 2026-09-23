import {
  ChevronRight,
  MessageCircle,
  PackageSearch,
} from 'lucide-react';

import { OrderState } from '@/types/order';

interface SupportActionsProps {
  state: OrderState;
}

export default function SupportActions({
  state,
}: SupportActionsProps) {
  const primaryLabel =
    state === 'delivered_not_received'
      ? 'Report an issue'
      : 'Contact support';

  return (
    <section className="flex flex-col gap-2.5 px-5 pb-2 pt-6">
      <button className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 text-[12px] font-bold text-white transition hover:bg-slate-800 active:scale-[0.99]">
        <MessageCircle size={18} />
        {primaryLabel}
      </button>

      {state === 'delivered_not_received' && (
        <button className="flex min-h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[12px] font-semibold text-slate-700 transition hover:bg-slate-50">
          <PackageSearch size={18} />

          <span>Help locate my package</span>

          <ChevronRight
            size={17}
            className="ml-auto"
          />
        </button>
      )}

      {state === 'delayed' && (
        <button className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-[12px] font-semibold text-slate-700 transition hover:bg-slate-50">
          View delivery details
          <ChevronRight size={17} />
        </button>
      )}
    </section>
  );
}