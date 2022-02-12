import { Footer } from "@mb/components/Footer";
import { Base } from "@mb/components/layout";
import NextHead from "next/head";

export const AdminWrapper: React.FC = ({
  children,
}) => {
  return (
    <Base fluid={true} className="martine-bore-antiques admin">
      <NextHead>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Base tag="h1">Admin Tools</Base>
      <Base>{children}</Base>
      <Footer />
    </Base>
  );
};
