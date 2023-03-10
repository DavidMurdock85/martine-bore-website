import { Footer } from "@mb/components/Footer";
import { Base, Flex } from "@mb/components/layout";
import { useAuth } from "@mb/providers/AuthProvider";
import NextHead from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Nav } from "react-bootstrap";

export const AdminWrapper: React.FC = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Base fluid={true} className="martine-bore-antiques admin">
      <NextHead>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Base tag="h1">Admin Tools</Base>
      <Flex xflexDirection="column">
        <Nav.Link className="basic-nav-link" href="/admin">
          Back to Admin Landing
        </Nav.Link>
        <Nav.Link className="basic-nav-link" href="/">
          Back to Homepage
        </Nav.Link>
        <Nav.Link className="basic-nav-link" href="/admin/listings/new">
          New Listing
        </Nav.Link>
        <Nav.Link className="basic-nav-link" href="/admin/listings/incomplete">
          Incomplete Listings
        </Nav.Link>
        <Nav.Link className="basic-nav-link" href="/admin/login">
          Login
        </Nav.Link>
      </Flex>
      <Base>{children}</Base>
      <Footer />
    </Base>
  );
};
