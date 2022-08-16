import { Banner } from "@mb/components/Banner";
import { Footer } from "@mb/components/Footer";
import { Base } from "@mb/components/layout";
import { Navigation } from "@mb/components/Navigation";
import { NewGallery } from "@mb/components/NewGallery";
import NextHead from "next/head";

interface PageWrapperProps {
  title?: string;
  description?: string;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  description,
  title,
}) => {
  return (
    <Base fluid={true} className="martine-bore-antiques">
      <NextHead>
        {description && <meta name="description" content={description} />}
        {title && <title>{title}</title>}
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Banner />
      <Navigation />
      <Base>{children}</Base>
      <NewGallery />
      <Footer />
    </Base>
  );
};
