import { CalendarDays, Clock3 } from 'lucide-react';

interface DeliveryInfoProps {
  estimatedDelivery: string;
}

export default function DeliveryInfo({
  estimatedDelivery,
}: DeliveryInfoProps) {
  return (
    <div className="mx-5 mt-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">
        <CalendarDays size={19} />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] text-slate-400">
          Estimated delivery
        </span>

        <strong className="text-[12px] text-slate-800">
          {estimatedDelivery}
        </strong>
      </div>

      <div className="ml-auto flex items-center gap-1 text-[10px] text-slate-500">
        <Clock3 size={15} />
        <span>10 AM – 8 PM</span>
      </div>
    </div>
  );
}