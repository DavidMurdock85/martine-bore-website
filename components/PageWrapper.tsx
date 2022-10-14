import NextHead from "next/head";
import { Flex, Col, Row } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
import { Banner } from "@mb/components/Banner";
import { NewArrivals } from "@mb/components/NewArrivals";
import { Footer } from "@mb/components/Footer";
import { OurStory } from "@mb/components/OurStory";
import { EverydayAntiques } from "@mb/components/EverydayAntiques";
import { Buying } from "@mb/components/Buying";
import { FeaturedAntiques } from "@mb/components/FeaturedAntiques";
import { PrivateGallery } from "@mb/components/PrivateGallery";
import { Services } from "@mb/components/Services";
import { SeasonalAntiques } from "@mb/components/SeasonalAntiques";
import { ContactForm } from "@mb/components/ContactForm";

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
        {description && <meta name="description" content={description} />}
        {title && <title>{title}</title>}
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      {/* Banner */}

      <Flex flexDirection="row" pb={20}>
        <Banner />
      </Flex>

      {/* Homepage Image */}
      <Col>
        <Flex className="homepage-image-parent" flexDirection="row" m={1}>
          {children}
        </Flex>

        {/* Categories - New Arrivals */}

        <Flex flexDirection="row">
          <NewArrivals />
        </Flex>

        {/* Our Story */}

        <Flex flexDirection="row">
          <OurStory />
        </Flex>

        {/* Categories - Seasonal Antiques */}

        <Flex flexDirection="row">
          <SeasonalAntiques />
        </Flex>

        {/* Featured Antiques */}

        <Flex flexDirection="row">
          <FeaturedAntiques />
        </Flex>

        {/* Categories - Everyday Antiques */}

        <Flex flexDirection="row">
          <EverydayAntiques />
        </Flex>

        {/* Private Gallery */}

        <Flex flexDirection="row">
          <PrivateGallery />
        </Flex>

        {/* Buying */}

        <Flex flexDirection="row">
          <Buying />
        </Flex>

        {/* Services */}

        <Flex flexDirection="row">
          <Services />
        </Flex>

        {/* Contact Form */}

        <Flex flexDirection="row">
          <ContactForm />
        </Flex>

        {/*Footer*/}

        <Flex flexDirection="column">
          <Footer />
        </Flex>
      </Col>
    </Flex>
  );
};
