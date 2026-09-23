import {
  AlertTriangle,
  CircleAlert,
  MapPinOff,
} from 'lucide-react';

import { OrderState } from '@/types/order';

interface StateMessageProps {
  state: OrderState;
}

const stateContent = {
  delayed: {
    icon: AlertTriangle,
    title: 'Your delivery is delayed',
    description:
      'Your package is taking a little longer than expected. We are working with the carrier to get it to you as soon as possible.',
    label: 'Updated estimate',
    value: 'September 27',
    wrapper: 'border-amber-200 bg-amber-50',
    iconWrapper: 'bg-amber-100 text-amber-700',
  },

  delivered_not_received: {
    icon: CircleAlert,
    title: 'Package marked as delivered',
    description:
      'The carrier marked this order as delivered, but you reported that you have not received it.',
    label: 'What happens next',
    value: 'We can help locate your package',
    wrapper: 'border-red-200 bg-red-50',
    iconWrapper: 'bg-red-100 text-red-600',
  },

  tracking_unavailable: {
    icon: MapPinOff,
    title: 'Tracking is temporarily unavailable',
    description:
      'Your order is confirmed, but tracking information is not available yet. Please check again later.',
    label: 'Estimated delivery',
    value: 'September 29',
    wrapper: 'border-slate-200 bg-slate-50',
    iconWrapper: 'bg-slate-200 text-slate-600',
  },
};

export default function StateMessage({
  state,
}: StateMessageProps) {
  const content = stateContent[state];
  const Icon = content.icon;

  return (
    <div
      className={`mx-5 mt-4 flex gap-3 rounded-2xl border p-4 ${content.wrapper}`}
    >
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${content.iconWrapper}`}
      >
        <Icon size={20} />
      </div>

      <div className="min-w-0">
        <h2 className="text-[14px] font-bold text-slate-900">
          {content.title}
        </h2>

        <p className="mt-1 text-[12px] leading-relaxed text-slate-600">
          {content.description}
        </p>

        <div className="mt-3 flex flex-col gap-0.5">
          <span className="text-[10px] text-slate-400">
            {content.label}
          </span>

          <strong className="text-[12px] text-slate-800">
            {content.value}
          </strong>
        </div>
      </div>
    </div>
  );
}