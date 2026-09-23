import { Check, Circle } from 'lucide-react';
import { TimelineItem } from '@/types/order';

interface OrderTimelineProps {
  items: TimelineItem[];
}

export default function OrderTimeline({
  items,
}: OrderTimelineProps) {
  return (
    <section className="px-5 pt-6">
      <div className="mb-4">
        <h2 className="text-[15px] font-bold text-slate-900">
          Delivery progress
        </h2>
      </div>

      <div>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div
              key={`${item.title}-${index}`}
              className="flex min-h-[58px]"
            >
              <div className="relative flex w-7 shrink-0 justify-center">
                {item.status === 'completed' && (
                  <div className="relative z-10 grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check size={13} strokeWidth={3} />
                  </div>
                )}

                {item.status === 'current' && (
                  <div className="relative z-10 grid h-6 w-6 place-items-center rounded-full border-2 border-blue-500 bg-blue-50">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                )}

                {item.status === 'pending' && (
                  <div className="relative z-10 grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-400">
                    <Circle size={8} fill="currentColor" />
                  </div>
                )}

                {!isLast && (
                  <div
                    className={`absolute top-6 bottom-0 w-0.5 ${
                      item.status === 'completed'
                        ? 'bg-emerald-500'
                        : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>

              <div className="flex-1 pb-5 pl-2">
                <div className="flex justify-between gap-3">
                  <h3 className="text-[13px] font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  {item.date && (
                    <span className="shrink-0 text-[10px] text-slate-400">
                      {item.date}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}