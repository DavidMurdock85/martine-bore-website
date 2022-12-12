import NextHead from "next/head";
import { Flex, Col } from "@mb/components/layout";
import { Banner } from "@mb/components/Banner";
import { Footer } from "@mb/components/Footer";

interface PageWrapperProps {
  //productMetaTitle?: string,
  //productMetaDescription?: string,
  //categoryMetaTitle?: string,
  //categoryMetaDescription?: string,
  metaTitle?: string;
  metaDescription?: string;
  title?: string;
  description?: string;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  metaTitle,
  metaDescription,
  //description,
  //title,
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      fluid={true}
      className="page-wrapper-parent"
    >
      <NextHead>
        {metaTitle && <title>{metaTitle}</title>}
        {metaDescription && (
          <meta name="meta-description" content={metaDescription} />
        )}
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      {/* Banner */}

      <Flex flexDirection="row">
        <Banner />
      </Flex>

      <Col>
        {/* Homepage Image */}
        <Flex className="homepage-image-parent" flexDirection="row" m={1}>
          {children}
        </Flex>

        {/*Footer*/}

        <Flex flexDirection="column">
          <Footer />
        </Flex>
      </Col>
    </Flex>
  );
};
