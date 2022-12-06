import { PageWrapper } from "@mb/components/PageWrapper";
import Image from "next/image";
import React from "react";
import { Flex, Col, Row } from "@mb/components/layout";
import { NewArrivals } from "@mb/components/NewArrivals";
import { About } from "@mb/components/About";
import { Curiosities } from "@mb/components/Curiosities";
import { Buying } from "@mb/components/Buying";
import { FeaturedAntiques } from "@mb/components/FeaturedAntiques";
import { PrivateGallery } from "@mb/components/PrivateGallery";
import { Sold } from "@mb/components/Sold";
import { Services } from "@mb/components/Services";
import { SeasonalAntiques } from "@mb/components/SeasonalAntiques";
import { ContactForm } from "@mb/components/ContactForm";

import type { NextPage } from "next";

const Home: NextPage = () => {

  return (
    
    <PageWrapper
      description="A second generation antique dealer in the heart of West Vancouver Ambleside District"
      title="Martine Boré Antiques Ltd."
    >


<Col>

<Image 
        src={`/main-image.jpeg`} 
        alt="A photo of the Martine Boré Antiques Gallery in Ambleside West Vancouver." 
        width="2000px" 
        height="1500px" />

        {/* About Us */}

        <Flex flexDirection="row">
          <About />
        </Flex>

        {/* Categories - New Arrivals */}

        <Flex flexDirection="row">
          <NewArrivals />
        </Flex>

        {/* Featured Antiques */}

        <Flex flexDirection="row">
          <FeaturedAntiques />
        </Flex>

        {/* Categories - Seasonal Antiques */}

        <Flex flexDirection="row">
          <SeasonalAntiques />
        </Flex>

        {/* Buying */}

        <Flex flexDirection="row">
          <Buying />
        </Flex>

        {/* Private Gallery */}

        <Flex flexDirection="row">
          <PrivateGallery />
        </Flex>

        <Flex flexDirection="row">
          <Curiosities />
        </Flex>

        {/* Services */}

        <Flex flexDirection="row">
          <Services />
        </Flex>

        {/* Sold */}

        <Flex flexDirection="row">
          <Sold />
        </Flex>

        {/* Contact Form */}

         <Flex flexDirection="row">
          <ContactForm />
        </Flex>
      
</Col>
         
    </PageWrapper>
  )
}

export default Home