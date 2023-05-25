import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Breadcrumb } from "@mb/components/Breadcrumbs";
import { PageWrapper } from "@mb/components/PageWrapper";
import { useAuth } from "@mb/providers/AuthProvider";
import { deleteListing } from "@mb/services/AdminService";
import { get } from "@mb/services/FetchService";
import { Category, Product } from "@mb/services/types";
import { IMAGES_BASE_URL } from "@mb/utils/constants";

// Define an interface for the props that this component accepts
interface ProductItemProps {
  onDelete?: () => void; // Optional function that takes no arguments and returns nothing
  product: Product; // Required object of type Product
}

// Define the ProductItem component as a function that takes in ProductItemProps as its props
export const ProductItem: React.FC<ProductItemProps> = ({
  onDelete,
  product,
}) => {
  // Import the useRouter hook from the Next.js framework
  const router = useRouter();

  // Use the useAuth hook to get the loggedIn state value from the authentication context
  const loggedIn = useAuth().state.loggedIn;

  // Destructure the properties of the product object for easier use within the component
  const { id, images, route, title } = product;

  return (
    <div
      className="flex flex-col p-2"
      onClick={() => {
        router.push(`/products/${route}`);
      }}
    >
      {loggedIn && (
        <div className="container flex flex-row" /*add flex right*/>
          <a href={`/admin/listings/${route}`} className="mr-1 pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </a>
          <div
            className="pb-1"
            onClick={async (e: React.MouseEvent) => {
              e.stopPropagation();
              const confirmDelete = confirm(
                "Are you sure you want to delete this listing?"
              );
              if (confirmDelete) {
                await deleteListing(id);
                onDelete && onDelete();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
      <div className="image-border-deco">
        {images.length > 0 && (
          <Image
            className=""
            src={`${IMAGES_BASE_URL}/${images[0].original}`}
            alt={title || ""}
          />
        )}
      </div>

      <div className="product-image-title">
        <div>{title}</div>
      </div>
    </div>
  );
};

const ProductCategory: NextPage = () => {
  // Get the Next.js router object
  const nextJSRouter = useRouter();

  // Get the categoryId from the query params
  const { categoryId } = nextJSRouter.query;

  // Set up state variables for category and products
  const [category, setCategory] = useState<Partial<Category>>({});
  const [products, setProducts] = useState<Product[]>([]);

  // Define a function to fetch the category and products from the API
  const fetchCategory = async () => {
    try {
      // Fetch the category by ID from the API
      const fetchedCategory: Category = await get(`/categories/${categoryId}`);
      // Set the category state variable to the fetched category
      setCategory(fetchedCategory);

      // Fetch the products for the category from the API
      const fetchedProducts: Product[] = await get(
        `/categories/${fetchedCategory.id}/products`
      );
      // Set the products state variable to the fetched products
      setProducts(fetchedProducts);
    } catch (err) {
      // Log any errors to the console
      console.log(err);
    }
  };

  // Use the useEffect hook to fetch the category and products whenever the categoryId changes
  useEffect(() => {
    fetchCategory();
  }, [categoryId]);

  // Destructure the category object for easier use within the component
  const { breadcrumbs, title, metaTitle, metaDescription } = category;
  return (
    <PageWrapper title={metaTitle} description={metaDescription}>
      <div className="flex flex-col" /*expand="width"*/>
        <h6 className="">
          <Breadcrumb breadcrumbItems={breadcrumbs || []} />
        </h6>

        <h1 className="">{title}</h1>

        <div className="flex flex-row mt-2">
          {products.length > 0 &&
            products.map((product, index: number) => (
              <ProductItem
                key={index}
                product={product}
                onDelete={() => {
                  setProducts(
                    products.filter((item) => {
                      return item.id !== product.id;
                    })
                  );
                }}
              />
            ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductCategory;
