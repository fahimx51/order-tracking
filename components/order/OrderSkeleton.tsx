const bone = 'animate-pulse rounded-lg bg-slate-200';

export default function OrderSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading order"
      className="mx-5 mt-4 space-y-4 pb-6"
    >
      {/* Status message */}
      <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
        <div className={`${bone} h-5 w-24`} />
        <div className={`${bone} h-7 w-48`} />
        <div className={`${bone} h-4 w-36`} />
      </div>

      {/* Timeline */}
      <div className="space-y-4 rounded-2xl bg-slate-50 p-4">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-4">
            <div className={`${bone} h-8 w-8 rounded-full`} />
            <div className={`${bone} h-4 w-32`} />
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
        <div className={`${bone} h-14 w-14`} />
        <div className="flex-1 space-y-2">
          <div className={`${bone} h-4 w-full`} />
          <div className={`${bone} h-3 w-24`} />
        </div>
      </div>

      {/* Support buttons */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`${bone} h-11`} />
        <div className={`${bone} h-11`} />
      </div>
    </div>
  );
}