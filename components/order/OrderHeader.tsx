import { ArrowLeft, MoreVertical } from 'lucide-react';

interface OrderHeaderProps {
  orderId: string;
}

export default function OrderHeader({
  orderId,
}: OrderHeaderProps) {
  return (
    <header className="flex h-[68px] items-center justify-between border-b border-slate-100 px-5">
      <button
        className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-700 transition hover:bg-slate-100"
        aria-label="Go back"
      >
        <ArrowLeft size={19} />
      </button>

      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[16px] font-bold text-slate-900">
          Order Tracking
        </span>

        <span className="text-[11px] text-slate-400">
          #{orderId}
        </span>
      </div>

      <button
        className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-700 transition hover:bg-slate-100"
        aria-label="More options"
      >
        <MoreVertical size={19} />
      </button>
    </header>
  );
}