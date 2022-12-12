import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Flex, Col } from "@mb/components/layout";

import { PageWrapper } from "@mb/components/PageWrapper";
import { About } from "@mb/components/About";
import { NewArrivals } from "@mb/components/NewArrivals";
import { FeaturedAntiques } from "@mb/components/FeaturedAntiques";
import { SeasonalAntiques } from "@mb/components/SeasonalAntiques";
import { Buying } from "@mb/components/Buying";
import { PrivateGallery } from "@mb/components/PrivateGallery";
import { Curiosities } from "@mb/components/Curiosities";
import { Services } from "@mb/components/Services";
import { Sold } from "@mb/components/Sold";
import { ContactForm } from "@mb/components/ContactForm";



const Home: NextPage = () => {

  return (
    
    <PageWrapper
      title="Martine Boré Antiques Ltd."  
      description="A second generation antique dealer in the heart of West Vancouver Ambleside District"
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