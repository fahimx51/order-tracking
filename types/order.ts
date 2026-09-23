export type OrderState =
  | 'delayed'
  | 'delivered_not_received'
  | 'tracking_unavailable';

export type TimelineStatus = 'completed' | 'current' | 'pending';

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  status: TimelineStatus;
}

export interface Order {
  id: string;
  state: OrderState;
  productName: string;
  productDescription: string;
  quantity: number;
  price: string;
  image: string;
  estimatedDelivery: string;
  orderDate: string;
  timeline: TimelineItem[];
}