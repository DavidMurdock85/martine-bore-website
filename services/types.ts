// ProdcutImage Interface Types

export interface ProductImage {
  original: string;
  thumbnail: string;
}

// Product Interface Types

export interface Product {
  id: number;
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
  metaTitle?: string;
  metaDescription?: string;
}

// Breadcrumb Interface Types

export interface CategoryBreadcrumb {
  name: string;
  url: string;
}

// Catagory Interface Types

export interface Category {
  id: number;
  route?: string;
  title: string;
  breadcrumbs: CategoryBreadcrumb[];
  list: string[];
  metaTitle?: string;
  metaDescription?: string;
}
