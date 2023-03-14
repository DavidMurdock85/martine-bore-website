import { del, post, postFile, put } from "@mb/services/FetchService";
import { Product, ProductImage } from "@mb/services/types";

// Defines an interface for the properties of a product listing
export interface Listing {
  id: number;
  categoryId: number;
  metaTitle?: string;
  metaDescription?: string;
  images?: ProductImage[]; // An array of images for the product
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

// Defines a type for a new product listing object, without the 'id' property
export type NewListing = Omit<Listing, "id">;

// Function to create a new product listing
export const createNewListing = async (
  newListing: NewListing
): Promise<Product> => {
  const { categoryId, ...remainingValues } = newListing;

  // Sends an HTTP POST request to create a new product with the given properties
  return post(`/categories/${categoryId}/products`, {
    body: JSON.stringify(remainingValues),
  });
};

// Function to update an existing product listing
export const updateListing = async (
  updateListing: Listing
): Promise<Product> => {
  // Removes the 'images' property from the input object before sending it to the server
  delete updateListing.images;

  // Sends an HTTP PUT request to update an existing product with the given properties
  return put(`/products/${updateListing.id}`, {
    body: JSON.stringify(updateListing),
  });
};

// Function to add images to an existing product listing
export const addImagesToListing = async (
  listingId: number,
  images: string[] | Blob[]
): Promise<ProductImage[]> => {
  // Creates a new FormData object to send the image files as part of the request payload
  const formData = new FormData();

  // Appends each image file to the FormData object
  images.map((image, index) => {
    formData.append(`image-${index}`, image);
  });

  // Sends an HTTP POST request to add the images to an existing product listing
  return await postFile(`/products/${listingId}/images`, {
    body: formData,
  });
};

// Function to delete an existing product listing
export const deleteListing = async (listingId: number): Promise<void> => {
  // Sends an HTTP DELETE request to delete an existing product listing
  await del(`/products/${listingId}`);
};
