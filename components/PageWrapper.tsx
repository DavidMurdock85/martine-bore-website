import NextHead from "next/head";
import { Flex } from "@mb/components/layout";
import { Link } from "@mb/components/elements";
//import { Banner } from "@mb/components/Banner";
import { Navigation } from "@mb/components/Navigation";
import { NewArrivals } from "@mb/components/NewArrivals";
import { Footer } from "@mb/components/Footer";
import { OurStory } from "@mb/components/OurStory";
import { EverydayAntiques } from "@mb/components/EverydayAntiques";
import { Buying } from "@mb/components/Buying";
import { PrivateGallery } from "@mb/components/PrivateGallery";
import { Services } from "@mb/components/Services";
import { Seasonal } from "@mb/components/Seasonal";
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
    <Flex flexDirection="column" justifyContent="center" fluid={true} className="page-wrapper-parent">
      <NextHead>
        {description && <meta name="description" content={description} />}
        {title && <title>{title}</title>}
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      {/* Banner */}

      {/*
      <Flex>
        <Banner />
      </Flex>
      */}

      {/* Navigation */}

      <Flex flexDirection="row">
        <Navigation />
      </Flex>

      {/* Homepage Image */}

      <Flex flexDirection="row" p={1}> {children}</Flex>

      {/* Categories - New Arrivals */}

      <Flex flexDirection="row">
        <NewArrivals />
      </Flex>

      {/* Our Story */}

      <Flex flexDirection="row" pl={1} pt={4} pr={1} pb={1}>
        <OurStory />
      </Flex>

      {/* Private Gallery */}

      <Flex flexDirection="row" p={1}>
        <PrivateGallery />
      </Flex>

      {/* Categories - Everyday Antiques */}

      <Flex flexDirection="row">
        <EverydayAntiques />
      </Flex>

      {/* Buying */}

      <Flex flexDirection="row">
        <Buying />
      </Flex>

      {/* Categories - Seasonal Antiques */}

      <Flex flexDirection="row">
        <Seasonal />
      </Flex>

      {/* Services */}

      <Flex flexDirection="row" p={1}>
        <Services />
      </Flex>

      {/* Contact Form */}

      <Flex flexDirection="row">
        <ContactForm />
      </Flex>

      {/*Footer*/}

      <Flex flexDirection="column" >
        <Footer />
      </Flex>
    </Flex>
  );
};
