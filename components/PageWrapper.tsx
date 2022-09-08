import { Banner } from "@mb/components/Banner";
import { Footer } from "@mb/components/Footer";
import { Base } from "@mb/components/layout";
import { Navigation } from "@mb/components/Navigation";
import { About } from "@mb/components/About";
import { FeaturedItem } from "@mb/components/FeaturedItem";
import { Buying } from "@mb/components/Buying";
import { NewGallery } from "@mb/components/NewGallery";
import { Services } from "@mb/components/Services";
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
      
      <About />

      <FeaturedItem />
      <Buying />
      <NewGallery />
      <Services />
      
      <Footer />
    </Base>
  );
};
