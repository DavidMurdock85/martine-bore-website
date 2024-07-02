export interface ProductImage {
  id: number;
  original: string;
  thumbnail: string;
  width: number;
  height: number;
}

export interface Product {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  category: Category;
  images: ProductImage[];
  title?: string;
  period?: string;
  date?: string;
  origin?: string;
  maker?: string;
  medium?: string;
  description?: string;
  route?: string;
  dimensions?: string;
  condition?: string;
  price?: string;
  productId?: string;
}

export interface Category {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  route?: string;
  title: string;
  list: string[];
}
