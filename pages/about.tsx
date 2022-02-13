import { Base, Col, Row } from "@mb/components/layout";
import { PageWrapper } from "@mb/components/PageWrapper";
import { IMAGES_BASE_URL } from "@mb/utils/constants";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const About: NextPage = () => {
  return (
    <PageWrapper title="About Us" description="">
      <Col className="about-sections">
        <Row>
          <Base class="about-us">
            <Image
              className="about-image"
              src={`${IMAGES_BASE_URL}/about-us-images/about-us1.jpeg`}
              alt="Image of Boré family in the original gallery"
            />
            <Base tag="h2" pt={3}>
              About Us
            </Base>
            <Base tag="h3" pl={2} pb={2}>
              Our Story
            </Base>
            <Base tag="p" pl={5} pr={2}>
              Martine Boré Antiques Ltd. is a second generation antique business
              located in the heart of Ambelside West Vancouver. The Boré family
              has been a part of the West Vancouver Community since the 1980s
              when Carmen Boré opened at 1867 Marine Dr. West Vancouver. In the
              1990s Carmens Daughter Martine began learning the trade from her
              mother joining her on buying trips to Europe, England, and France.
              They visited antique markets, grand estates and the multiudes of
              antique dealers in Paris, London and the South of France. Much of
              their time was spent in the Southwest of France where the Boré
              Family roots go back to the 18th century. After spending a decade
              living in Europe herself, Martine returned to Canada and continued
              the family business in West Vancouver in the 2000s.
            </Base>
            <Base tag="h3" pl={2} pb={2}>
              Our Philosophy
            </Base>
            <Base tag="p" pl={5} pr={2}>
              Our philosophy here at Martine Boré Antiques has alway been about
              bringing clients unique works of art that are thoughfully sourced
              and thoroughly curated. We search locally and the world over for
              special pieces that defy a category and can work with a variety of
              designs and styles. We specialize in 19th and early 20th c. French
              and English Antiques but we carry a wide variety of antiques from
              all over the world and of many periods and styles. Whether your
              new to collecting or have lifelong passion, let us treat you to
              the unique buying experience that characterizes a visit to our
              gallery.
            </Base>
          </Base>
        </Row>
      </Col>
    </PageWrapper>
  );
};

export default About;
