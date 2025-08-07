interface ProductOption {
  id: number;
  productId: number;
  name: string;
  position: number;
  values: string[];
}

export interface ProductVariant {
  id: number;
  productId: number;
  title: string;
  sku: string;
  position: number;
  grams: number;
  price: string;
  compareAtPrice: string;
  fulfillmentService: string;
  inventoryManagement: string;
  inventoryItemId: number;
  option1: string;
  option2: string;
  option3: string;
  createdAt: string;
  updatedAt: string;
  taxable: boolean;
  taxCode: string;
  barcode: string;
  imageId: number;
  inventoryQuantity: number;
  weight: string;
  weightUnit: string;
  oldInventoryQuantity: number;
  requiresShipping: boolean;
  adminGraphqlApiId: string;
}

interface ProductImage {
  id: number;
  productId: number;
  position: number;
  createdAt: string;
  updatedAt: string;
  width: number;
  height: number;
  src: string;
  alt?: string;
  variantIds?: number[];
  adminGraphqlApiId: string;
}

export interface LimitProduct {
  id: string;
  projectId: string;
  productId: string;
  variationId: string;
  quantity: number;
  updatedAt: string;
  createdAt: string;
}

export interface Product {
  id: number;
  title: string;
  bodyHTML: string;
  vendor: string;
  productType: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publishedScope: string;
  tags: string;
  options: ProductOption[];
  variants: ProductVariant[];
  image: ProductImage;
  images: ProductImage[];
  templateSuffix: string;
  metafieldsGlobalTitleTag: string;
  metafieldsGlobalDescriptionTag: string;
  adminGraphqlApiId: string;
}

export interface ProductForOrder {
  cursor: string;
  node: {
    id: string;
    title: string;
    quantity: number;
    currentQuantity: number;
    discountedTotalPrice: {
      amount: string;
      currencyCode: string;
    };
    originalTotalPrice: {
      amount: string;
      currencyCode: string;
    };
    variant: {
      id: string;
      title: string;
      sku: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      image: {
        id: string;
        url: string;
        altText: string;
        width: number;
        height: number;
      };
    };
  };
};
