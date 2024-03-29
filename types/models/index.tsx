export interface Product {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: null;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  differential_pricing: DifferentialPricing;
  inventory_id: null;
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: Struct | null;
  values: Value[];
  source: number;
  value_type: string;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Value {
  id: null | string;
  name: string;
  struct: Struct | null;
  source: number;
}

export interface DifferentialPricing {
  id: number;
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: null;
  promise: null;
}

export interface Results {
  site_id: string;
  results: Product[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: ValueAvailableFilter[];
}

export interface ValueAvailableFilter {
  id: string;
  name: string;
  results: number;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: ValueFilter[];
}

export interface ValueFilter {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
  id: string;
  name: string;
}
