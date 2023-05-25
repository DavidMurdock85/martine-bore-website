import { del, post, postFile, put } from "@mb/services/FetchService";
import { Product, ProductImage } from "@mb/services/types";

export interface Listing {
  id: number;
  categoryId?: number;
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

/*CREATE LISTING*/

// Defines a type for a new product listing object, without the 'id' property
export type NewListing = Omit<Listing, "id">;

export const createNewListing = async (
  newListing: NewListing
): Promise<Product> => {
  const { categoryId, ...remainingValues } = newListing;

  return post(`/categories/${categoryId}/products`, {
    body: JSON.stringify(remainingValues),
  });
};

/*EDIT LISTING*/

export const updateListing = async (
  updateListing: Listing
): Promise<Product> => {
  // Removes the 'images' property from the input object before sending it to the server
  delete updateListing.images;

  return put(`/products/${updateListing.id}`, {
    body: JSON.stringify(updateListing),
  });
};

/*UPLOAD IMAGE*/

export const addImagesToListing = async (
  listingId: number,
  images: string[] | Blob[]
): Promise<ProductImage[]> => {

  console.log('getting here');

  // Creates a new FormData object to send the image files as part of the request payload
  const formData = new FormData();

  console.log(images);

  // Appends each image file to the FormData object
  images.map((image, index) => {
    
    console.log(image);

    formData.append(`image-${index}`, image);
  });

  return await postFile(`/products/${listingId}/images`, {
    body: formData,
  });
};

/*DELETE LISTING*/

export const deleteListing = async (listingId: number): Promise<void> => {
  await del(`/products/${listingId}`);
};

/*DELETE IMAGE*/

// Function to delete an existing product image

export const deleteImage = async (david: number): Promise<void> => {
  // Sends an HTTP DELETE request to delete an existing product image
  await del(`/images/${david}`);
};
