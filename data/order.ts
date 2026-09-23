import { Order } from '@/types/order';

export const orders: Order[] = [
  {
    id: 'ORD-28491',
    state: 'delayed',
    productName: 'Everyday Running Shoes',
    productDescription: 'Lightweight running shoes',
    quantity: 1,
    price: '$89.00',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    estimatedDelivery: 'Sep 27, 2026',
    orderDate: 'Sep 21, 2026',
    timeline: [
      {
        title: 'Order placed',
        description: 'Your order has been confirmed',
        date: 'Sep 21',
        status: 'completed',
      },
      {
        title: 'Shipped',
        description: 'Package left the warehouse',
        date: 'Sep 22',
        status: 'completed',
      },
      {
        title: 'Out for delivery',
        description: 'Delivery is taking longer than expected',
        date: 'Sep 24',
        status: 'current',
      },
      {
        title: 'Delivered',
        date: 'Expected Sep 27',
        status: 'pending',
      },
    ],
  },

  {
    id: 'ORD-28492',
    state: 'delivered_not_received',
    productName: 'Wireless Headphones',
    productDescription: 'Noise cancelling headphones',
    quantity: 1,
    price: '$129.00',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    estimatedDelivery: 'Sep 23, 2026',
    orderDate: 'Sep 19, 2026',
    timeline: [
      {
        title: 'Order placed',
        description: 'Your order has been confirmed',
        date: 'Sep 19',
        status: 'completed',
      },
      {
        title: 'Shipped',
        description: 'Package left the warehouse',
        date: 'Sep 20',
        status: 'completed',
      },
      {
        title: 'Out for delivery',
        date: 'Sep 23',
        status: 'completed',
      },
      {
        title: 'Delivered',
        description: 'Marked as delivered',
        date: 'Sep 23',
        status: 'current',
      },
    ],
  },

  {
    id: 'ORD-28493',
    state: 'tracking_unavailable',
    productName: 'Minimal Backpack',
    productDescription: 'Water-resistant everyday backpack',
    quantity: 1,
    price: '$64.00',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    estimatedDelivery: 'Sep 29, 2026',
    orderDate: 'Sep 23, 2026',
    timeline: [],
  },
];