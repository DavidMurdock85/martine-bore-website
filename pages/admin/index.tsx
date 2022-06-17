import { AdminWrapper } from "@mb/components/AdminWrapper";
import { Base, Center } from "@mb/components/layout";
import React, { useState } from "react";

const AdminLanding: React.FC = () => {
  return (
    <AdminWrapper>
      <Center className="admin-landing" flexDirection="column" my={4}>
        <Base tag="a" href="/admin/login">Login</Base>
        <Base tag="a" href="/admin/listings/new">New Listing</Base>
        <Base tag="a" href="/admin/listings/incomplete" mt={1}>Incomplete Listings</Base>
      </Center>
    </AdminWrapper>
  );
};

export default AdminLanding;
