import { AdminWrapper } from "@mb/components/AdminWrapper";
import { Base, Center, Flex } from "@mb/components/layout";
import { useAuth } from "@mb/providers/AuthProvider";
import { get } from "@mb/services/FetchService";
import { Product } from "@mb/services/types";
import React, { useEffect, useState } from "react";

const Incomplete: React.FC = () => {
  const auth: any = useAuth();
  const [incompleteListings, setIncompleteListings] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      setIncompleteListings(await get<Product[]>("/products/incomplete"));
    })();
  }, []);
  return (
    <AdminWrapper>
      <Center className="sign-in" flexDirection="column" my={4}>
        <Base tag="h2">Incomplete Listings</Base>
        <Flex flexDirection="column" mt={2}>
          {incompleteListings.map(listing => {
            return (
              <Flex
                  key={listing.id}
                  tag="a"
                  href={`/admin/listings/${listing.route}`}
                  mt={1}
                >
                  <Base>ProductId: {listing.productId}</Base><Base ml={2}>Title: {listing.title}</Base>
              </Flex>
            );
          }) }
        </Flex>
      </Center>
    </AdminWrapper>
  );
};

export default Incomplete;
