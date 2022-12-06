import NextHead from "next/head";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
import { Banner } from "@mb/components/Banner";
import { Footer } from "@mb/components/Footer";

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
    <Flex
      flexDirection="column"
      justifyContent="center"
      fluid={true}
      className="page-wrapper-parent"
    >
      <NextHead>

        {/*change description to metaDescription ? */}

        {description && <meta name="description" content={description} />}

        {/*change title to metaTitle ? */}

        {title && <title>{title}</title>}

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
