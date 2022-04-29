/* --- STATE --- */
export interface CartState {
  detailCart: { orderItems: OrderItem[] };
  quantity: number;

  addStatus: string;
  removeStatus: string;
}

interface OrderItem {
  id: number;
  quantity: number;
  product: Product;
}

interface Product {
  id: number;
  title: string;
  price: number;
  product_images: [{ imageUrl: string }];
}
