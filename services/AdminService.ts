import { del, post, postFile, put } from "@mb/services/FetchService";
import { Product, ProductImage } from "@mb/services/types";


export interface Listing {
  id: number;
  categoryId: number;
  metaTitle?: string;
  metaDescription?: string;
  images?: ProductImage[];
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

export type NewListing = Omit<Listing, "id">;

// create a listing

export const createNewListing = async (
  newListing: NewListing
): Promise<Product> => {
  const { categoryId, ...remainingValues } = newListing;

  return post(`/categories/${categoryId}/products`, {
    body: JSON.stringify(remainingValues),
  });
};

// update a listing

export const updateListing = async (
  updateListing: Listing
): Promise<Product> => {
  delete updateListing.images;
  return put(`/products/${updateListing.id}`, {
    body: JSON.stringify(updateListing),
  });
};

// add images to a listing

export const addImagesToListing = async (
  listingId: number,
  images: string[] | Blob[]
): Promise<ProductImage[]> => {
  const formData = new FormData();
  images.map((image, index) => {
    formData.append(`image-${index}`, image);
  });

  return await postFile(`/products/${listingId}/images`, {
    body: formData,
  });
};

// delete a listing

export const deleteListing = async (listingId: number): Promise<void> => {
  await del(`/products/${listingId}`);
};
