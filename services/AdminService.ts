import { post } from "@mb/services/FetchService";
import { Product } from "@mb/services/types";

export interface NewListing {
  categoryId: number;
  title?: string;
  period?: string;
  date?: string;
  origin?: string;
  maker?: string;
  medium?: string;
  description?: string;
  dimensions?: string;
  price?: string;
}

export const createNewListing = async (newListing: NewListing): Promise<Product> => {
  const { categoryId, ...remainingValues } = newListing;

  return post(`/categories/${categoryId}/listings`, {
    body: JSON.stringify(remainingValues),
  });
};
