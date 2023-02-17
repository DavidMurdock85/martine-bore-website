import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Flex, Col, Row } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { NewArrivals } from "@mb/components/NewArrivals";
import { About } from "@mb/components/About";
import { FeaturedAntiques } from "@mb/components/FeaturedAntiques";
import { Buying } from "@mb/components/Buying";
import { PrivateGallery } from "@mb/components/PrivateGallery";
import { Services } from "@mb/components/Services";
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
        height="1500px"
        className="" />

 {/* New Arrivals */}

 <Flex flexDirection="row">
 <NewArrivals />
        </Flex>

        {/* About Us */}

        <Flex flexDirection="row">
          <About />
        </Flex>

        {/* Featured Antiques */}

        <Flex flexDirection="row">
          <FeaturedAntiques />
        </Flex>

        {/* Buying */}

        <Flex flexDirection="row">
          <Buying />
        </Flex>

        {/* Private Gallery */}

        <Flex flexDirection="row">
          <PrivateGallery />
        </Flex>

        {/* Services */}

        <Flex flexDirection="row">
          <Services />
        </Flex>

        {/* Contact Form */}

{/*

         <Flex flexDirection="row">
          <ContactForm />
        </Flex>

        */}
        
      
</Col>
         
    </PageWrapper>
  )
}

export default Home