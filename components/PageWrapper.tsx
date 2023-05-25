import NextHead from "next/head";
import { Banner } from "@mb/components/Banner";
import { Footer } from "@mb/components/Footer";


interface PageWrapperProps {
  children?: any;
  title?: string;
  description?: string;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <NextHead>
        {title && <title>{title}</title>}
        {description && <meta name="meta-description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Banner />
      {children}
      <Footer />
    </>
  );
};
