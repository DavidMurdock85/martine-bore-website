import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "@mb/components/Breadcrumbs";
import { Image } from "@mb/components/elements";
import { Base, Col, Flex, FlexRight, Row } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { useAuth } from "@mb/providers/AuthProvider";
import { deleteListing } from "@mb/services/AdminService";
import { get } from "@mb/services/FetchService";
import { Category, Product } from "@mb/services/types";
import { IMAGES_BASE_URL } from "@mb/utils/constants";


// Define an interface for the props that this component accepts
interface ProductItemProps {
  onDelete?: () => void;  // Optional function that takes no arguments and returns nothing
  product: Product;       // Required object of type Product
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
    <Col
      className="product-item"
      flexDirection="column"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      p={2}
      onClick={() => {
        router.push(`/products/${route}`);
      }}
    >
      {loggedIn && (
        <FlexRight flexDirection="row">
          <Flex
            tag="a"
            className="edit"
            mr={1}
            pb={1}
            href={`/admin/listings/${route}`}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Flex>
          <Flex
            className="delete"
            pb={1}
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
            <FontAwesomeIcon icon={faTimes} />
          </Flex>
        </FlexRight>
      )}
      <Base className="image-border-deco">
        {images.length > 0 && (
          <Image
            className="product-image"
            src={`${IMAGES_BASE_URL}/${images[0].original}`}
            alt={title || ""}
          />
        )}
      </Base>

      <Base className="product-image-title">
        <Base>{title}</Base>
      </Base>
    </Col>
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
      <Flex className="product-category" expand="width" flexDirection="column">

        <Base tag="h6" className="breadcrumbs-text">
          <Breadcrumb breadcrumbItems={breadcrumbs || []} />
        </Base>

        <Base tag="h1" className="product-category-title">
          {title}
        </Base>

        <Row mt={2}>
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
        </Row>
      </Flex>
    </PageWrapper>
  );
};

export default ProductCategory;
