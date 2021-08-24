import "./About.scss";
import React from "react";
import { Base, Col, Flex, Row, Split } from "../components/layout";

export const About = () => {
    return (
        <Col className="about-sections">
            <Row>
                <Base>
                    <Base tag="h2" pt={3}>About Us</Base>
                    {/*<Base tag="img" src="images/about-us-1.jpeg"></Base>*/}

                    <Base tag="h3" pl={2} pb={2}>Our Story</Base>

                    <Base tag="p" pl={5} pr={2}>
                        Martine Boré Antiques Ltd. is a second generation antique business located in the heart of Ambelside West
                        Vancouver.  The Boré family has been a part of the West Vancouver Community since the 1980s when Carmen Boré opened
                        at 1867 Marine Dr. West Vancouver. In the 1990s Carmen's Daughter Martine began learning the trade from her mother
                        joining her on buying trips to Europe, England, and France.  They visited antique markets, grand estates and the multiudes
                        of antique dealers in Paris, London and the South of France.  Alot of their time was spent in the Southwest of France where
                        the The Bore Families roots go back to the 18th century. After spending a decade living in Europe herself, Martine returned
                        to Canada and continued the family business in West Vancouver in the 2000s.
                </Base>

                    <Base tag="h3" pl={2} pb={2}>Our Philosophy</Base>

                    <Base tag="p" pl={5} pr={2}>
                        Our philosophy here at Martine Boré Antiques has alway been about bring clients unique works of art that are thoughfully sourced.
                        We search far and wide for special pieces that defy a catagory and can work with a variety of designs and styles. We specialize
                        in 19th and early 20th c. French and English Antiques but we carry an assortment of items from all over the world and of many periods
                        and styles. Let us treat you to a unique buying experience.
                </Base>

                    <Base tag="h3" pl={2}>Environmental Commitment</Base>
                    <Base tag="p" pl={5} pr={2}>
                        There is also an immense environmental benefit of giving old things a new life rather than buying new ones.  Part of
                        our philosophy at Martine Bore Antiques is empowering you to be the next custodian of something unique. In a world that
                        is full of waste and things that have a very short shelf life before we discard them, antiques and vintage art gives you
                        an opportunity to become the next owner of something totally unique in your life.
                </Base>

                </Base>
            </Row>
        </Col>
    );
};
