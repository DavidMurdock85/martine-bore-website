import { post, postFile } from "@mb/services/FetchService";
import { Product, ProductImage } from "@mb/services/types";

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

  return post(`/categories/${categoryId}/products`, {
    body: JSON.stringify(remainingValues),
  });
};

export const addImagesToListing = async (listingId: number, images: string[] | Blob[]): Promise<ProductImage[]> => {
  const formData = new FormData();
  images.map((image, index) => {
    formData.append(`image-${index}`, image);
  })

  return await postFile(`/products/${listingId}/images`, {
    body: formData,
  });
};
