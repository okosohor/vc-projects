import { ProductForOrder } from "../product/product.model";

interface Order {
  id: string;
  name: string;
  orderNumber: number;
  email: string;
  canceledAt: string | null;
  processedAt: string;
  fulfillmentStatus: string; //"UNFULFILLED" | "FULFILLED" | "PARTIALLY_FULFILLED" | "ON_HOLD";
  financialStatus: string;// "PAID" | "UNPAID" | "PARTIALLY_PAID" | "PENDING";
  currencyCode: string;
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
  subtotalPrice: {
    amount: string;
    currencyCode: string;
  };
  totalShippingPrice: {
    amount: string;
    currencyCode: string;
  };
  totalTax: {
    amount: string;
    currencyCode: string;
  };
  shippingAddress: {
    name: string;
    address1: string;
    address2: string;
    city: string;
    zip: string;
    country: string;
    province: string;
    phone: string;
  };
};

export interface OrderWithProduct extends Order {
  lineItems : {
    pageInfo: PageInfo,
    edges: ProductForOrder[]
  }
}

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};

export type OrderEdge = {
  cursor: string;
  node: Order;
}

type OrdersData = {
  pageInfo: PageInfo;
  edges: OrderEdge[];
};

export interface OrdersResponse  {
  id: string;
  orders: OrdersData;
};


export interface OrderWithProductResponse {
  id: string;
  orders: {
    pageInfo: PageInfo,
    edges: [{
      cursors: string,
      node: OrderWithProduct
    }]
  }
}
