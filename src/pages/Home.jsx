import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Base, Col, Flex, Row, Split } from "../components/layout";

export const Home = () => {
   return (
      <Base>
         <Carousel interval={null}>
         <Carousel.Item><img src="/images/homepage-images/home-page-image-1.jpeg" /></Carousel.Item>)
         <Carousel.Item><img src="/images/homepage-images/home-page-image-2.jpeg" /></Carousel.Item>)
         <Carousel.Item><img src="images/homepage-images/home-page-image-3.jpeg" /></Carousel.Item>)
         <Carousel.Item><img src="/images/homepage-images/home-page-image-4.jpeg" /></Carousel.Item>)
      </Carousel>
      </Base>
   );
};

