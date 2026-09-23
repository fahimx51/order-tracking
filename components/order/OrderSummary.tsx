import { Order } from '@/types/order';

interface OrderSummaryProps {
  order: Order;
}

export default function OrderSummary({
  order,
}: OrderSummaryProps) {
  return (
    <section className="px-5 pt-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-slate-900">
          Order summary
        </h2>

        <span className="text-[11px] text-slate-400">
          {order.quantity} item
        </span>
      </div>

      <div className="flex gap-3 rounded-2xl border border-slate-100 p-3">
        <img
          src={order.image}
          alt={order.productName}
          className="h-[70px] w-[70px] shrink-0 rounded-xl bg-slate-100 object-cover"
        />

        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <h3 className="truncate text-[13px] font-bold text-slate-800">
              {order.productName}
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              {order.productDescription}
            </p>
          </div>

          <strong className="text-[13px] text-slate-900">
            {order.price}
          </strong>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 px-0.5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-slate-400">
            Order placed
          </span>

          <strong className="text-[11px] text-slate-700">
            {order.orderDate}
          </strong>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <span className="text-[10px] text-slate-400">
            Order ID
          </span>

          <strong className="text-[11px] text-slate-700">
            #{order.id}
          </strong>
        </div>
      </div>
    </section>
  );
}